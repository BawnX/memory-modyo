"use client";

import PlayingCardComponent from "@/components/atoms/playing-card";
import SometingWrongComponent from "@/components/atoms/someting-wrong";
import {
  generateProcess,
  generateStateForPlayCards,
} from "../../commons/functions/playing-card-board";
import useGameStore from "@/commons/store/game";
import useAnimalsStore from "@/commons/store/animals";
import { findIndex } from "@/commons/functions/arrays";

/**
 * Component Board
 *
 * @component
 * @return  {JSX.Element} Component Borad for Play game cards
 *
 * @example
 * return (
 *   <PlayingCardBoardComponent />
 * )
 */

function PlayingCardBoardComponent() {
  const data = useAnimalsStore((state) => state.data);

  const choice = useGameStore((state) => state.choice);
  const reset = useGameStore((state) => state.reset);
  const processStore = useGameStore((state) => state.process);
  const setProcess = useGameStore((state) => state.setProcess);
  const setReset = useGameStore((state) => state.setReset);

  const process = generateProcess(processStore, setProcess, data, 6);
  const allVisibleState = generateStateForPlayCards(process);

  if (reset) {
    const arrIndex = allVisibleState
      .map((el, index) => {
        return { isVisible: el.isVisible, index };
      })
      .filter((el) => el.isVisible);
    arrIndex.forEach((el) => {
      allVisibleState[el.index].setIsVisble(false);
    });
    setReset(false);
  }

  const updateHidde = async () => {
    const indexArr = choice.map((el) => findIndex(allVisibleState, el.id));
    indexArr.forEach((el) => {
      allVisibleState[el].setIsVisble(false);
    });
  };

  if (process.error) return <SometingWrongComponent />;

  return (
    <section className="receptacle receptacle--board">
      {process.data.map(({ id, src, key }, index) => (
        <PlayingCardComponent
          key={id}
          src={src}
          name={key}
          id={index}
          update={updateHidde}
          isVisible={allVisibleState[index].isVisible}
          setIsVisble={allVisibleState[index].setIsVisble}
        />
      ))}
    </section>
  );
}

export default PlayingCardBoardComponent;
