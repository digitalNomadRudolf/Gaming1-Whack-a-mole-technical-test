import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import WAMreducer from "../reducers/gameState";

export const store = configureStore({
  reducer: {
    game: WAMreducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
