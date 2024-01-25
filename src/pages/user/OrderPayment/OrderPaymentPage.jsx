import { useParams } from "react-router-dom";

import { LinearProgress } from "@mui/material";

import PageMessage from "@/components/PageMessage";
import PaymentButton from "@/components/PaymentButton";
import { useGetOrderPaymentSignature } from "@/hooks";
import { Main } from "@/shared/Main/Main";
import { OrderPaymentContainer } from "./OrderPaymentPage.styled";

const OrderPaymentPage = () => {
  const { orderId } = useParams();
  const { data, error } = useGetOrderPaymentSignature(orderId);

  if (error) return <PageMessage variant="error" message={error.message} />;
  if (data?.data?.status === "paid")
    return <PageMessage variant="payment" message="Order already paid" />;

  return (
    <Main>
      <LinearProgress sx={{ width: "100%" }} />
      <OrderPaymentContainer>
        <PageMessage variant="payment" message="Prepare payment page..." />

        <PaymentButton orderId={orderId} isAutoSubmit={true} />
      </OrderPaymentContainer>
    </Main>
  );
};

export default OrderPaymentPage;
