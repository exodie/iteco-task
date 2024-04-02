import { type FC } from "react";
import styled from "styled-components";

import { ChooseRouteOfFilter } from "./chooseRoute";
import { FindCargoOfFilter } from "./findOfCargo";
import { FindByOrderOfFilter } from "./findByOrder";

export const FilterOfTransportation: FC = () => {
  return (
    <FilterContainer>
      <FindByOrderOfFilter />

      <ChooseRouteOfFilter />

      <FindCargoOfFilter />
    </FilterContainer>
  );
};

const FilterContainer = styled.section`
  display: flex;
  flex-direction: column;

  background: white;

  padding: 32px;
  margin: 10px auto;

  border-radius: 16px;

  row-gap: 25px;

  max-width: 1100px;
  width: 100%;
`;
