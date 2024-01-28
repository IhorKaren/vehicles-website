import { AiOutlineCloseCircle } from "react-icons/ai";

import Modal from "@mui/material/Modal";

import { BoxStyled, IconButtonStyled } from "./AppModal.styled";

export const AppModal = ({
  onClose,
  children,
  isOpen,
  contentProps,
  ...props
}) => {
  return (
    <Modal keepMounted open={isOpen} onClose={onClose} {...props}>
      <BoxStyled {...contentProps}>
        <IconButtonStyled
          aria-label="close"
          color="secondary"
          onClick={onClose}
          size="large"
        >
          <AiOutlineCloseCircle fontSize="30" />
        </IconButtonStyled>
        {children}
      </BoxStyled>
    </Modal>
  );
};
