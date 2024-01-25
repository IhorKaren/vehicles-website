import { AiOutlineCloseCircle } from "react-icons/ai";

import { IconButton } from "@mui/material";
import { lighten } from "@mui/material/styles";

import { CloseBtnProps } from "./CloseBtn.props";

export const CloseBtn = ({ onClose }) => {
  return (
    <IconButton
      onClick={onClose}
      size="large"
      sx={{
        position: "absolute",
        top: "20px",
        right: "20px",
        color: (theme) => lighten(theme.palette.text.secondary, 0.4),
        padding: 0,
        backgroundColor: "transparent",
        borderRadius: "50%",
        transition: "color 250ms linear, transform 250ms linear",
        "&:hover": {
          color: (theme) => theme.palette.primary.main,
          transform: "rotate(180deg)",
        },
        zIndex: 2,
      }}
    >
      <AiOutlineCloseCircle fontSize="30" />
    </IconButton>
  );
};

CloseBtn.propTypes = CloseBtnProps;
