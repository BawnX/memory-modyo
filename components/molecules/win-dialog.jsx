"use client";

import { useRouter } from "next/navigation";
import DialogComponent from "../atoms/dialog";
import ScoreBoardComponent from "./score-board";
import ButtonComponent from "../atoms/button";
import AvatarUserComponent from "./avatar-user";
import useGameStore from "@/commons/store/game";
import { resetGameBoard } from "@/commons/functions/playing-card-board";

/**
 * Component when user win
 *
 * @component
 * @return  {JSX.Element} Component for Scores
 *
 * @example
 * return (
 *   <WinDialogComponent />
 * )
 */
function WinDialogComponent() {
  const router = useRouter();
  const choice = useGameStore((state) => state.choice);
  const correctAnswers = useGameStore((state) => state.correctAnswers);
  const isComplete = useGameStore((state) => state.isComplete);
  const resetGame = useGameStore((state) => state.resetGame);
  const setChoice = useGameStore((state) => state.setChoice);
  const setCorrectAnswers = useGameStore((state) => state.setCorrectAnswers);
  const setIsComplete = useGameStore((state) => state.setIsComplete);

  const returnGame = () => {
    resetGameBoard(
      choice,
      correctAnswers,
      resetGame,
      setChoice,
      setCorrectAnswers,
    );

    setIsComplete(false);
  };

  const returnHome = () => {
    router.push("/home", { scroll: false });
  };

  return (
    <DialogComponent isOpen={isComplete}>
      <section className="receptacle receptacle--one-col">
        <AvatarUserComponent size={384} />

        <div className="dialog--body">
          <h1 className="text-5xl">Felicidades Ganaste!!</h1>
          <section className="receptacle--score--right">
            <ScoreBoardComponent />
          </section>
          <ButtonComponent type="button" mode="rectagle" onClick={returnGame}>
            Volver A Jugar
          </ButtonComponent>
          <ButtonComponent type="button" mode="rectagle" onClick={returnHome}>
            Volver a Inicio
          </ButtonComponent>
        </div>
      </section>
    </DialogComponent>
  );
}

export default WinDialogComponent;
