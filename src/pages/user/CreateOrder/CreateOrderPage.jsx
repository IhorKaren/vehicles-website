import CreateOrderForm from "@/components/CreateOrderForm";
import PageMessage from "@/components/PageMessage";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { useDisableToasts, useGetCartItems } from "@/hooks";
import { AppLoader } from "@/shared";
import { Main } from "@/shared/Main/Main";
import { CreateOrderPageContainer } from "./CreateOrderPage.styled";

const CreateOrderPage = () => {
  const { data, isLoading, error } = useGetCartItems();
  useDisableToasts();
  let render = null;

  if (isLoading) {
    render = <AppLoader />;
  } else if (error) {
    render = <PageMessage variant="error" message={error.message} />;
  } else if (data?.success) {
    render =
      data.cart.items.length > 0 ? (
        <CreateOrderForm data={data.cart} />
      ) : (
        <PageMessage
          variant="no-data"
          message="Oops! No products were found in the cart!"
        />
      );
  }
  return (
    <Main>
      <CreateOrderPageContainer>
        <PageTitle>Placing an order</PageTitle>
        {render}
      </CreateOrderPageContainer>
    </Main>
  );
};

export default CreateOrderPage;
