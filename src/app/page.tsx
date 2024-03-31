"use client";

import { Virtuoso } from "react-virtuoso";
import styled from "styled-components";

import { selectTransportation, useAppSelector } from "@/shared/store";

import { TransportationCart } from "@/widgets/cart";

export default function Home() {
  const transportation = useAppSelector(selectTransportation);

  return (
    <Main>
      <h1 style={{ marginLeft: 10 }}>Список перевозок</h1>
      <Virtuoso
        style={{ height: "685px" }}
        totalCount={transportation.length}
        data={transportation}
        itemContent={(_, trans) => <TransportationCart {...trans} />}
      />
    </Main>
  );
}

const Main = styled.main`
  margin: auto;

  background-color: #f5f5f5;

  max-width: 65vw;
  min-height: 100vh;
`;
