import { type FC } from "react";
import styled from "styled-components";

import { CargoOfTransportation } from "@/shared/types";
import { parseTimeOfString } from "@/shared/lib";

export const CartCargo: FC<CargoOfTransportation> = (props) => {
  const date = parseTimeOfString(props.dateInfo.date);

  return (
    <CargoContainer>
      <SubContainer>
        <span>{props.typeOfCargo}</span>

        <InfoSubContainer>
          <span>{props.tonnage} т.</span>
          {"/"}
          <span>
            {props.volume.join(" - ")} м<sup>3</sup>
          </span>
        </InfoSubContainer>

        <div>
          <span>
            Погрузка:{" "}
            {`${date.day} ${date.modifiedMonth} ${date.year} ${date.hour}:${date.minute}`}
          </span>
        </div>
      </SubContainer>

      <SubContainer>
        <span>№А{props.numberOfCargo}</span>
        <span>
          {props.typeOfTrailer} / {props.typeOfLoading}
        </span>
      </SubContainer>
    </CargoContainer>
  );
};

const CargoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  max-width: 480px;
  width: 100%;
  max-height: 90px;
  margin: auto auto auto 0;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const InfoSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
`;
