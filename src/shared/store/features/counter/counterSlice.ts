import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log(`value ---> ${state.value}`);
    },

    decrement: (state) => {
      state.value -= 1;
      console.log(`value ---> ${state.value}`);
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export const counterReducer = counterSlice.reducer;
