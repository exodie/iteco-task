import { useState } from "react";
import styled from "styled-components";

import { DatePicker, Input } from "antd";
import { SwapOutlined } from "@ant-design/icons";

// Возникла проблема,с width, честно говоря пока не понял как сделать +- адаптивно и при этом не беребарщивать с width
const InputStyles = {
  padding: "16px 50px 16px 16px",
  fontSize: 16,
  border: "1px solid #017B59",
  maxWidth: "367px",
  width: "100%",
  zIndex: 5,
};

export const ChooseRouteOfFilter = () => {
  const [fieldFrom, setFieldFrom] = useState<string>("");
  const [fieldTo, setFieldTo] = useState<string>("");

  const handleSwap = () => {
    if (!fieldFrom || !fieldTo) return;

    setFieldFrom(fieldTo);
    setFieldTo(fieldFrom);
  };

  return (
    <ChooseRouteContainer>
      <ChooseRouteSubContainer>
        <Input
          type="text"
          value={fieldFrom}
          onChange={(e) => setFieldFrom(e.target.value)}
          style={InputStyles}
          placeholder="Откуда"
        />
        <SwapShape onClick={handleSwap}>
          <SwapOutlined width={38} height={38} />
        </SwapShape>
        <Input
          type="text"
          value={fieldTo}
          onChange={(e) => setFieldTo(e.target.value)}
          style={InputStyles}
          placeholder="Куда"
        />
      </ChooseRouteSubContainer>

      <DatePicker
        style={{ maxWidth: 268, width: "100%", padding: 16 }}
        placeholder="Дата погрузки"
      />
    </ChooseRouteContainer>
  );
};

const ChooseRouteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  column-gap: 24px;
`;

const ChooseRouteSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  column-gap: 18px;

  position: relative;
`;

const SwapShape = styled.button`
  padding: 10px;

  width: 38px;
  height: 38px;

  font-size: 18px;

  border-radius: 100px;
  border: 1px solid #818281;

  background: white;

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 8;

  :hover {
    cursor: pointer;
  }
`;
