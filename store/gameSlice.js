import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const newGame = createAsyncThunk("flags/getAllFlags", async (mode) => {
  const res = await fetch("api/flags", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ difficulty: mode }),
  }).then((data) => data.json());
  return res;
});

const initialState = {
  point: 0,
  mode: "medium",
  cards: [],
  controlCards: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    openCard: (state, action) => {
      state.cards.find((card) => card.id === action.payload.id).open = true;
    },
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
    matchedCard: (state, action) => {
      if (state.controlCards.length <= 2) {
        state.controlCards.push(action.payload);
      }
      if (state.controlCards.length === 2) {
        if (
          state.controlCards[0].id !== state.controlCards[1].id &&
          state.controlCards[0].title === state.controlCards[1].title
        ) {
          state.cards.find((card) => card.id === state.controlCards[0].id).matched = true;
          state.cards.find((card) => card.id === state.controlCards[1].id).matched = true;
          state.point += 50;
          state.controlCards = [];
        } else {
          state.cards.find((card) => card.id === state.controlCards[0].id).open = false;
          state.cards.find((card) => card.id === state.controlCards[1].id).open = false;
          state.controlCards = [];
          state.point -= 10;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(newGame.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.controlCards = [];
      state.point = 0;
    });
  },
});

export const { matchedCard, openCard, changeMode } = gameSlice.actions;
export default gameSlice.reducer;
