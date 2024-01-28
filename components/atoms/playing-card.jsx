"use client";

import Image from "next/image";
import useGameStore from "@/commons/store/game";
import {
  setNewChoice,
  prepareSecondChoice,
  updateCorrectAnswers,
  resetChoice,
  updateErrorScore,
  updateErrorAnswers,
  removeChosen,
  updateCorrectScore,
  updateIsCompleGame,
} from "../../commons/functions/playing-card";

/**
 * Component for the playing cards and logic of each one
 *
 * @component
 * @param {Object} playingCard
 * @param {string} playingCard.src           url to image
 * @param {string} playingCard.name          name of card
 * @param {string} playingCard.id            id to identify card
 * @param {function(): void} playingCard.update        update to invicible where is error
 * @param {boolean} playingCard.isVisible     state to see or not a card
 * @param {function(isVisible: boolean): void} playingCard.setIsVisble   update to see or not a card
 * @return  {JSX.Element}                 Component for play card
 *
 * @example
 * return (
 *   <PlayingCardComponent
 *      key={id}
 *      src={src}
 *      name={key}
 *      id={id}
 *      update={updateHidde}
 *      isVisible={allVisibleState[index].isVisible}
 *      setIsVisble={allVisibleState[index].setIsVisble}
 *   />
 * )
 */
function PlayingCardComponent({
  src,
  name,
  id,
  update,
  isVisible,
  setIsVisble,
}) {
  const process = useGameStore((state) => state.process);
  const choice = useGameStore((state) => state.choice);
  const turns = useGameStore((state) => state.turns);
  const success = useGameStore((state) => state.success);
  const errors = useGameStore((state) => state.errors);
  const score = useGameStore((state) => state.score);
  const correctAnswers = useGameStore((state) => state.correctAnswers);

  const setChoice = useGameStore((state) => state.setChoice);
  const setTurns = useGameStore((state) => state.setTurns);
  const setSuccess = useGameStore((state) => state.setSuccess);
  const setErrors = useGameStore((state) => state.setErrors);
  const setScore = useGameStore((state) => state.setScore);
  const setCorrectAnswers = useGameStore((state) => state.setCorrectAnswers);
  const setIsComplete = useGameStore((state) => state.setIsComplete);

  const onClick = () => {
    const isCorrect = correctAnswers.some((el) => el.id === id);

    if (isCorrect) {
      return;
    }

    const isChosen = choice.some((el) => el.id === id);
    if (isChosen) {
      removeChosen(choice, id, setChoice, setIsVisble);
      return;
    }

    if (choice.length >= 2) {
      return;
    }

    setNewChoice(choice, id, name, setChoice, setIsVisble);
    if (choice.length === 1) {
      return;
    }
    const firstChoice = choice[0];
    prepareSecondChoice(turns, setIsVisble, setTurns);

    if (firstChoice.name === name) {
      updateCorrectAnswers(
        correctAnswers,
        firstChoice,
        id,
        name,
        setCorrectAnswers,
      );
      updateCorrectScore(success, score, setSuccess, setScore);
      resetChoice(choice, setChoice);
      updateIsCompleGame(correctAnswers, process, setIsComplete);
      return;
    }

    updateErrorScore(errors, score, setErrors, setScore);
    updateErrorAnswers(choice, update, setChoice);
  };
  return (
    <article className="playing-card">
      <div
        className={
          isVisible
            ? "playing-card__back playing-card--hidden"
            : "playing-card__back "
        }
        onClick={onClick}
      />
      <Image
        src={src}
        alt=""
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
        }}
        onClick={onClick}
        className={
          !isVisible
            ? "playing-card__img playing-card--hidden"
            : "playing-card__img "
        }
      />
    </article>
  );
}

export default PlayingCardComponent;
