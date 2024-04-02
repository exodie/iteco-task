import styled from "styled-components";

import { Input } from "antd";

export const FindByOrderOfFilter = () => {
  return (
    <FindCargoContainer>
      <h3 style={{ margin: "12.5px 0" }}>
        <strong>Поиск грузов</strong>
      </h3>

      <Input style={{ width: 268, padding: 16 }} placeholder="№ заказа" />
    </FindCargoContainer>
  );
};

const FindCargoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
