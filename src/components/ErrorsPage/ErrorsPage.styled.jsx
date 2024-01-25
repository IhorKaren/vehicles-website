import { Box, styled } from "@mui/material";

export const CenterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
  textAlign: "center",
});

export const ImageBox = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "80vh",
  width: "auto",
  height: "auto",
  marginBottom: theme.spacing(2),
}));
