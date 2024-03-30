import { configureStore } from "@reduxjs/toolkit";

import { counterReducer, transportationReducer } from "./features";

export const store = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      transportation: transportationReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
