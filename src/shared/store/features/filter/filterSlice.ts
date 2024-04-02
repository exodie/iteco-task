import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

export interface Filters {
  from: string;
  to: string;
  numberOfOrder: string;
  dateOfTransportation: Date | null;
}

const initialState: Filters = {
  from: "",
  to: "",
  numberOfOrder: "",
  dateOfTransportation: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    resetAllFilters: (state) => {
      state = initialState;

      return state;
    },
  },
});

export const { resetAllFilters } = filterSlice.actions;

export const selectFilters = (state: RootState) => state.filters;

export const filtersReducer = filterSlice.reducer;
