import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

import { type Transportation } from "@/shared/types";

const initialState: Transportation[] = [];

export const transportationSlice = createSlice({
  name: "transportation",
  initialState,
  reducers: {
    addTransportation: (
      state,
      { payload }: PayloadAction<Transportation[]>
    ) => {
      state = state.concat(payload);

      return state;
    },
  },
});

export const { addTransportation } = transportationSlice.actions;

export const selectTransportation = (state: RootState) => state.transportation;

export const transportationReducer = transportationSlice.reducer;
