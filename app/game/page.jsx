"use client";

import { useQuery } from "@tanstack/react-query";

import PlayingCardBoardComponent from "@/components/molecules/playing-card-board";
import ScoreBoardComponent from "@/components/molecules/score-board";
import SometingWrongComponent from "@/components/atoms/someting-wrong";
import LoadingComponent from "@/components/atoms/loading";
import fetchAnimals from "@/commons/repositories/animals";
import useAnimalsStore from "@/commons/store/animals";
import ResetButtonComponent from "@/components/atoms/reset-button";
import BackButtonComponent from "@/components/atoms/back-button";
import WinDialogComponent from "@/components/molecules/win-dialog";

export default function Home() {
  const setData = useAnimalsStore((state) => state.setData);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["animals"],
    queryFn: fetchAnimals,
    retry: false,
  });

  if (isLoading) return <LoadingComponent />;
  if (isError) return <SometingWrongComponent />;

  setData(data ?? { entries: [] });

  return (
    <main>
      <section className="receptacle receptacle--score">
        <section className="receptacle--score--left">
          <BackButtonComponent />
          <ResetButtonComponent />
        </section>
        <section className="receptacle--score--right">
          <ScoreBoardComponent />
        </section>
      </section>
      <PlayingCardBoardComponent data={data} />

      <WinDialogComponent />
    </main>
  );
}
