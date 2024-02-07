import { useState, useEffect, FC, ReactNode } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

type ModalProps = {
  modalIsOpen: boolean;
  children: ReactNode;
  closeModal: () => void;
};

const MainModal: FC<ModalProps> = ({ modalIsOpen, closeModal, children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [modalIsOpen]);

  return (
    <Modal
      open={open}
      onClose={closeModal}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        padding: "10px",
      }}
    >
      <Box
        position={"relative"}
        sx={{ backgroundColor: "#ffffff", padding: 2 }}
      >
        <IconButton
          aria-label="close"
          onClick={closeModal}
          sx={{
            position: "absolute",
            right: 4,
            top: 4,
          }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default MainModal;
