import { createSlice } from "@reduxjs/toolkit";

interface WAMGameState {
  name: string;
  score: number;
}

const initialState: WAMGameState = {
  name: "",
  score: 0,
};

export const gameSlice = createSlice({
  name: "WAMgame",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { setName, setScore } = gameSlice.actions;
export default gameSlice.reducer;
