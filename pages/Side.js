import SettingsModal from "@/components/SettingsModal";
import { changeMode, newGame } from "@/store/gameSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Side() {
  const dispatch = useDispatch();
  const { point, mode } = useSelector((state) => state.game);
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <div className="side">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-4">
        <h1 className="text-2xl font-bold">Flag Game</h1>
        <p className="text-gray-500">Select matching flags</p>

        <h2>point: {point}</h2>

        <div className="mt-4 flex flex-col gap-4">
          <button className="btn btn-secondary" onClick={() => dispatch(newGame(mode))}>
            New Game
          </button>

          <button className="btn btn-tertiary" onClick={() => setSettingsOpen(!settingsOpen)}>
            Settings
          </button>
          {settingsOpen && <SettingsModal setSettingsOpen={setSettingsOpen} />}

          <a href="https://github.com/veyselkose" className="btn text-center">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Side;
