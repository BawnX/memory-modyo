import { useState } from "react";
import GenerateRandomId from "@/commons/functions/avatar";
import { shuffleArr, sliceArr } from "@/commons/functions/arrays";

/**
 * Map animals data from request
 *
 * @param {Object[]} data   data from request
 * @returns {object[[]]} Mapped data from request
 */
function mapAnimalsData(data) {
  return data.entries.map((el) => {
    return [
      {
        src: el.fields.image.url,
        key: el.meta.slug,
        id: GenerateRandomId(1, 10000),
      },
      {
        src: el.fields.image.url,
        key: el.meta.slug,
        id: GenerateRandomId(1, 10000),
      },
    ];
  });
}

/**
 * Process Data Animals for game
 *
 * @param {object[]} data   data from map Animals
 * @param {number}  size    size for game
 * @returns {({ data: object[]; error: null; } | { data: null; error: string; })}
 */
function processAnimalsData(data, size) {
  try {
    const mappedData = mapAnimalsData(data);
    const shuffleData = shuffleArr(mappedData);
    const sliceData = sliceArr(shuffleData, size);
    return {
      data: shuffleArr(sliceData.flat()),
      error: null,
    };
  } catch {
    return {
      data: null,
      error: "Hubo un error",
    };
  }
}

/**
 * Save in storage or get storage for game
 *
 * @param {object[]}                  processStore  data from storage
 * @param {function(object[]): void}  setProcess    set process in storage
 * @param {object[]}                  data          data from process animal
 * @param {number}                    size          size for game
 * @returns {object[]} process to game
 */
function generateProcess(processStore, setProcess, data, size) {
  if (processStore.data.length === 0) {
    const process = processAnimalsData(data, size);
    setProcess(process);
    return process;
  }

  return processStore;
}

/**
 * Generate state per card
 *
 * @param {object[]} process game process
 * @returns {object[]} states for game
 */
function generateStateForPlayCards(process) {
  return process.data.map((_, index) => {
    const [isVisible, setIsVisble] = useState(false);

    return { id: index, isVisible, setIsVisble };
  });
}

/**
 * Reset Game
 *
 * @param {object[]} choice                                         current chosen
 * @param {object[]} correctAnswers                                 correct choice
 * @param {() => void } resetGame                                   function to reset game
 * @param {(newChoice: boolean) => void} setChoice                  new Choice
 * @param {(newCorrectAnswer: object[]) => void} setCorrectAnswers  correct answers
 */
function resetGameBoard(
  choice,
  correctAnswers,
  resetGame,
  setChoice,
  setCorrectAnswers,
) {
  resetGame();
  if (choice.length > 0) {
    choice.length = 0;
    setChoice(choice);
  }

  if (correctAnswers.length > 0) {
    correctAnswers.length = 0;
    setCorrectAnswers(correctAnswers);
  }
}

export {
  mapAnimalsData,
  processAnimalsData,
  generateProcess,
  generateStateForPlayCards,
  resetGameBoard,
};
