import PageMessage from "@/components/PageMessage";
import { useGetCartItems } from "@/hooks";
import { AppLoader } from "@/shared";
import CartSummary from "../CartSummary";
import EmptyCart from "../EmptyCart/EmptyCart";
import { cartLoaderStyles } from "../UserModalCart.styled";

const ModalContent = () => {
  const { data, isLoading, error } = useGetCartItems();

  if (isLoading) {
    return <AppLoader style={cartLoaderStyles} />;
  } else if (error) {
    return (
      <PageMessage
        variant="error"
        message={error.message}
        sx={{ padding: "1rem", paddingBottom: "2rem" }}
        imageProps={{ width: "400px", height: "400px" }}
        messageProps={{ style: { fontWeight: "600" } }}
      />
    );
  } else if (data?.success) {
    return data.cart.items.length === 0 ? (
      <EmptyCart />
    ) : (
      <CartSummary data={data.cart} />
    );
  }
};

export default ModalContent;
