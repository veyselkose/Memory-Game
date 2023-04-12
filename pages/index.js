import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { useDispatch, useSelector } from "react-redux";
import { changeMode, newGame } from "@/store/gameSlice";
import { useEffect } from "react";
import Main from "./Main";
import Side from "./Side";
import NewGameModal from "@/components/NewGameModal";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { cards, point, mode } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newGame(mode));
  }, []);

  const isFinish = cards.every((card) => card.matched === true);
  return (
    <main className={`bg-zinc-100 dark:bg-zinc-800 ${inter.className}`}>
      <div className="container mx-auto grid grid-cols-6 gap-4">
        <Main />
        <Side />
      </div>
      {isFinish && <NewGameModal />}
    </main>
  );
}
