import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import PageMessage from "@/components/PageMessage";
import { route } from "@/constants";
import { closeUserCart } from "@/redux/cartStatus/slice";
import { AppButton } from "@/shared";

const EmptyCart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isNotDishesRoute = location.pathname !== route.DISHES;

  const handleSearchDishClick = () => {
    dispatch(closeUserCart());
    navigate(route.DISHES);
  };

  return (
    <>
      <PageMessage
        variant="no-data"
        message="Oops! No products were found in the cart!"
        sx={{ padding: "1rem", paddingBottom: "2rem" }}
        imageProps={{ width: "300px", height: "300px" }}
        messageProps={{ style: { fontWeight: "600" } }}
      />
      {isNotDishesRoute && (
        <AppButton
          style={{ marginBottom: "2rem" }}
          label="Search for a dish"
          onClick={handleSearchDishClick}
        />
      )}
    </>
  );
};

export default EmptyCart;
