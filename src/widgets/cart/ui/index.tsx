"use client";

import { type FC } from "react";
import styled from "styled-components";

import { type Transportation } from "@/shared/types";

import { CartRoute } from "./route";
import { CartSeparatorOfItems } from "./separator";
import { CartCargo } from "./cargo";
import { CartPayment } from "./payment";

export const TransportationCart: FC<Transportation> = ({
  route,
  cargo,
  payment,
}) => {
  return (
    <Container>
      <CartRoute {...route} />
      <CartSeparatorOfItems />
      <CartCargo {...cargo} />
      <CartSeparatorOfItems />
      <CartPayment {...payment} />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: white;

  padding: 32px 25px;
  margin: 16px 10px;

  border-radius: 16px;

  max-width: 1100px;
`;
