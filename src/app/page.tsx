"use client";

import { Virtuoso } from "react-virtuoso";
import styled from "styled-components";

import { selectTransportation, useAppSelector } from "@/shared/store";

import { TransportationCart } from "@/widgets/cart";
import { FilterOfTransportation } from "@/widgets/filter";

export default function Home() {
  const transportation = useAppSelector(selectTransportation);

  return (
    <Main>
      <Title>Список перевозок</Title>
      <Virtuoso
        style={{ height: "685px" }}
        totalCount={transportation.length}
        data={transportation}
        itemContent={(_, trans) => <TransportationCart {...trans} />}
      />

      <Title>Фильтр перевозок</Title>
      <FilterOfTransportation />

      <Title>Гриды списка</Title>
      ...
    </Main>
  );
}

const Main = styled.main`
  margin: auto;

  background-color: #f5f5f5;

  max-width: 67.5vw;
  min-height: 100vh;
`;

const Title = styled.h1`
  margin: 16px;
`;
