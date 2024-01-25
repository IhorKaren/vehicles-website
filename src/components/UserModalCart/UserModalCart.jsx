import { useDispatch, useSelector } from "react-redux";

import { selectIsHidden, selectIsOpen } from "@/redux/cartStatus/selectors";
import { closeUserCart } from "@/redux/cartStatus/slice";
import { AppModal } from "@/shared/AppModal/AppModal";
import ModalContent from "./ModalContent/ModalContent";
import { modalStyles } from "./UserModalCart.styled";

const UserModalCart = () => {
  // const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const isHidden = useSelector(selectIsHidden);

  const onClose = () => {
    console.log("closeUserCart");
    // dispatch(closeUserCart());
  };

  return (
    <AppModal
      isOpen={isOpen}
      onClose={onClose}
      contentProps={{ style: { ...modalStyles, opacity: isHidden ? 0 : 1 } }}
    >
      <ModalContent />
    </AppModal>
  );
};

export default UserModalCart;
