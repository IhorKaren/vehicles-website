import { AiOutlineCloseCircle } from "react-icons/ai";

import Modal from "@mui/material/Modal";

import { AppModalProps } from "./AppModal.props";
import { BoxStyled, IconButtonStyled } from "./AppModal.styled";

/**
 * AppModal component for rendering a AppModal window.
 *
 * @component
 * @param {function} onClose - The callback function to handle modal close.
 * @param {boolean} isOpen - A boolean indicating whether the modal is open or closed.
 * @param {React.ReactNode} children - The content to be displayed within the modal.
 * @returns {JSX.Element}
 */

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

AppModal.propTypes = AppModalProps;
