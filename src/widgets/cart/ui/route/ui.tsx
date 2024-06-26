"use client";

import { type FC } from "react";
import styled from "styled-components";

import { type RouteOfTransportation } from "@/shared/types";

export const CartRoute: FC<RouteOfTransportation> = ({
  from,
  to,
  distance,
  addPoints,
}) => {
  return (
    <RouteContainer>
      <span>
        <strong>{from.city}</strong> {from.area}
      </span>

      <span>
        <strong>{to.city}</strong> {to.area}
      </span>

      <div>
        <span>
          Расстояние: {distance}км{" "}
          {/* // TODO: Fix addPoints generating & посмотреть падежи в слове */}
          {addPoints?.length && (
            <AddPoints>+{addPoints.length} Пункта</AddPoints>
          )}
        </span>
      </div>
    </RouteContainer>
  );
};

const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 6.5px;

  max-width: 320px;
  width: 100%;
  max-height: 90px;
`;

const AddPoints = styled.span`
  color: #017B59;
  font-weight: 600;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
