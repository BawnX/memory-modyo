"use client";

import ScoreComponent from "@/components/atoms/score";
import useGameStore from "@/commons/store/game";

/**
 * Component Score Board
 *
 * @component
 * @return  {JSX.Element} Component for Scores
 *
 * @example
 * return (
 *   <ScoreBoardComponent />
 * )
 */
function ScoreBoardComponent() {
  const turns = useGameStore((state) => state.turns);
  const score = useGameStore((state) => state.score);
  const success = useGameStore((state) => state.success);
  const errors = useGameStore((state) => state.errors);

  return (
    <>
      <ScoreComponent title="Turnos" body={turns} position="8" />
      <ScoreComponent title="Puntajes" body={score} position="9" />
      <ScoreComponent title="Acciertos" body={success} position="10" />
      <ScoreComponent title="Errores" body={errors} position="11" />
    </>
  );
}

export default ScoreBoardComponent;
