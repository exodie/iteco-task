"use client";

import { type ReactNode, useRef } from "react";
import { Provider } from "react-redux";

import { type AppStore, store, addTransportation } from "@/shared/store";
import { getTransportations } from "@/shared/api/transportation";

export function WithReduxProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = store();
    storeRef.current.dispatch(addTransportation(getTransportations));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
