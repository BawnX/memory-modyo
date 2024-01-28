"use client";

import { ReloadIcon } from "@/components/svg";
import useGameStore from "@/commons/store/game";
import { resetGameBoard } from "@/commons/functions/playing-card-board";

/**
 * Component rendered in client for change theme
 *
 * @component
 * @return  {JSX.Element} Component Theme Switcher
 *
 * @example
 * return (
 *   <ResetButtonComponent />
 * )
 */
function ResetButtonComponent() {
  const choice = useGameStore((state) => state.choice);
  const correctAnswers = useGameStore((state) => state.correctAnswers);
  const resetGame = useGameStore((state) => state.resetGame);
  const setChoice = useGameStore((state) => state.setChoice);
  const setCorrectAnswers = useGameStore((state) => state.setCorrectAnswers);

  const onClick = () => {
    resetGameBoard(
      choice,
      correctAnswers,
      resetGame,
      setChoice,
      setCorrectAnswers,
    );
  };

  return (
    <button type="button" className="button button--rounded" onClick={onClick}>
      <ReloadIcon size={36} />
    </button>
  );
}

export default ResetButtonComponent;
