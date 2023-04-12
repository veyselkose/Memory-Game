import { changeMode, newGame } from "@/store/gameSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function NewGameModal() {
  const { mode,point } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <div className="flex flex-col justify-center w-2/3 md:w-1/2 bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-4 ">
        <h1 className="text-2xl font-bold">New Game</h1>
        <h1 className="text-xl mt-4">Last Point: <span className="text-xl font-medium"> {point}</span></h1>
        
        <div className="flex items-center gap-5 my-4">
          <label htmlFor="modeChange" className="font-semibold">
            Difficulty
          </label>

          <select
            name="modeChange"
            id="modeChange"
            className=" block flex-1 mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            value={mode}
            onChange={(e) => {
              dispatch(changeMode(e.target.value));
            }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button className="btn" onClick={() => dispatch(newGame(mode))}>
          Play
        </button>
      </div>
    </div>
  );
}

export default NewGameModal;
