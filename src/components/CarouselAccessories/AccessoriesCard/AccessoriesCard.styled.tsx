import { styled, Box, lighten } from "@mui/material";

export const AccessoryCardWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "200px",
  height: "280px",
  borderRadius: "20px",
  background: theme.palette.background.paper,
}));

export const AccessoryImageWrapper = styled("div")(() => ({
  position: "relative",
}));

export const AccessoryImage = styled("img")(() => ({
  width: "180px",
  height: "114px",
  display: "block",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
}));

export const AccessoryPrice = styled("h2")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "700",
  letterSpacing: "0.5px",
  color: theme.palette.common.white,
  margin: "0px 10px",
}));

export const PriceWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  background: theme.palette.background.paper,
  top: "110px",
  left: "5px",
  display: "flex",
  justifyContent: "space-between",
  p: 0.3,
  borderRadius: "4px",
  backgroundColor: lighten(theme.palette.text.secondary, 0.3),
  backdropFilter: "blur(3px)",
}));

export const FavoriteButton = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "5px",
  right: "5px",
  background: theme.palette.background.paper,
  borderRadius: "20px",
}));

export const MainInfoWrapper = styled("span")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const AccessoryName = styled("h2")(({ theme }) => ({
  display: "inline-block",
  fontSize: "15px",
  fontWeight: "700",
  letterSpacing: "-1px",
  color: theme.palette.text.primary,
  margin: "20px 10px 5px",
}));

export const AccessoryDescription = styled("p")(() => ({
  fontFamily: "Inter",
  fontSize: "12px",
  fontWeight: "500",
  textAlign: "justify",
  letterSpacing: "-0.5px",
  margin: "-5px 10px 0 10px",
}));

export const ButtonsWrapper = styled("div")(() => ({
  padding: "10px 10px 0 10px",
}));
