import styled from "styled-components";

import { Button } from "antd";

export const FindCargoOfFilter = () => {
  return (
    <FindWithFilter>
      <span
        style={{
          fontSize: 16,
          textDecoration: "underline",
          color: "#818281",
        }}
      >
        Сбросить фильтры
      </span>

      <Button
        style={{
          width: 268,
          backgroundColor: "#FF9A19",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          padding: "20px 100px",
        }}
      >
        ПОИСК
      </Button>
    </FindWithFilter>
  );
};

const FindWithFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  column-gap: 24px;

  margin: auto 0 auto auto;
`;
