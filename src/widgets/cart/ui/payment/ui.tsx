import { type FC } from "react";
import styled from "styled-components";

import { PaymentOfTransportation } from "@/shared/types";

export const CartPayment: FC<PaymentOfTransportation> = ({ amount, FAL }) => {
  return (
    <PaymentContainer>
      <span>
        <strong>{amount} Р</strong>
      </span>

      <span>ГСМ: {FAL} Р</span>
    </PaymentContainer>
  );
};

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 180px;
  width: 100%;
  max-height: 90px;

  margin: auto auto auto 0;
`;
