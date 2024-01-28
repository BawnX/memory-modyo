import { findIndex } from "@/commons/functions/arrays";

/**
 * Generate selection of card
 *
 * @param {string}    id        current id choice
 * @param {string}    name      current name choice
 * @returns {object}  object to select choice
 */
function generateSelection(id, name) {
  return {
    id,
    name,
  };
}

/**
 * Set new choice of card
 *
 * @param {object[]}                choice        Array of chosen cards
 * @param {string}                  id            current id card
 * @param {string}                  name          actualluy name card
 * @param {function(object[]): void}  setChoice     update chosen cards
 * @param {function(boolean): void}   setIsVisble   update to see or not a card
 */
function setNewChoice(choice, id, name, setChoice, setIsVisble) {
  setIsVisble(true);
  choice.push(generateSelection(id, name));
  setChoice(choice);
}

/**
 * Set turn and visible card
 *
 * @param {number}                  turns         string of current turn
 * @param {function(boolean): void}  setIsVisble   update to see or not a card
 * @param {function(number): void}  setTurns      update the turn
 */
function prepareSecondChoice(turns, setIsVisble, setTurns) {
  setIsVisble(true);
  setTurns(turns + 1);
}

/**
 * Reset choice of cards
 *
 * @param {object[]}  choice        Array of chosen cards
 * @param {function(object[]): void}  setChoice     update chosen cards
 */
function resetChoice(choice, setChoice) {
  choice.length = 0;
  setChoice(choice);
}

/**
 * Remove specific choice of card and set not visible
 *
 * @param {object[]}                  choice        Array of chosen cards
 * @param {string}                    id            current id card
 * @param {function(object[]): void}  setChoice     update chosen cards
 * @param {function(boolean): void}   setIsVisble   update to see or not a card
 * @returns {void}
 */
function removeChosen(choice, id, setChoice, setIsVisble) {
  choice.splice(findIndex(choice, id), 1);
  setChoice(choice);
  setIsVisble(false);
}

/**
 * Update correct answers
 *
 * @param {object[]}                  correctAnswers      all correct choice
 * @param {object}                    firstChoice         first selection card
 * @param {string}                    id                  current id choice
 * @param {string}                    name                current name choice
 * @param {function(object[]): void}  setCorrectAnswers   update corrects choise cards
 */
function updateCorrectAnswers(
  correctAnswers,
  firstChoice,
  id,
  name,
  setCorrectAnswers,
) {
  correctAnswers.push(firstChoice);
  correctAnswers.push(generateSelection(id, name));
  setCorrectAnswers(correctAnswers);
}

/**
 * Update the correct score of the cards
 *
 * @param {number} success          current number of correct choice
 * @param {number} score            current number of points
 * @param {function(number): void}  setSuccess   update number of correct choice
 * @param {function(number): void}  setScore     update number of points obtain
 */
function updateCorrectScore(success, score, setSuccess, setScore) {
  setSuccess(success + 1);
  setScore(score + 2);
}

/**
 * update the incorrect score of the cards
 *
 * @param {number} errors           current number of incorrect choice
 * @param {number} score            current number of points
 * @param {function(number): void}  setErrors    update number of incorrect choice
 * @param {function(number): void}  setScore     update number of points obtain
 */
function updateErrorScore(errors, score, setErrors, setScore) {
  setErrors(errors + 1);
  setScore(score - 1);
}

/**
 * Update errors choice cards
 *
 * @param {object[]}                  choice    Array of chosen cards
 * @param {function(): void}          update    reset all visible cards
 * @param {function(object[]): void}  setChoice update choice
 */
function updateErrorAnswers(choice, update, setChoice) {
  setTimeout(() => {
    update();
    resetChoice(choice, setChoice);
  }, 1000);
}

/**
 * Update Game is completed
 *
 * @param {object[]}                        correctAnswers    correct answers game
 * @param {object}                          process           data current game
 * @param {(newIsComplet: boolean) => void} setIsComplete     update game is complete
 */
function updateIsCompleGame(correctAnswers, process, setIsComplete) {
  if (correctAnswers.length === process.data.length) {
    setIsComplete(true);
  }
}

export {
  generateSelection,
  setNewChoice,
  updateCorrectScore,
  prepareSecondChoice,
  updateCorrectAnswers,
  removeChosen,
  resetChoice,
  updateErrorScore,
  updateErrorAnswers,
  updateIsCompleGame,
};
