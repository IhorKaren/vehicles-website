import { styled, Box, lighten } from "@mui/material";

export const VehicleCardWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "200px",
  height: "280px",
  borderRadius: "20px",
  background: theme.palette.background.paper,
}));

export const VehicleImageWrapper = styled("div")(() => ({
  position: "relative",
}));

export const VehicleImage = styled("img")(() => ({
  width: "200px",
  height: "134px",
  display: "block",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.3s ease",
  ":hover": {
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
}));

export const VehiclePrice = styled("h2")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "700",
  letterSpacing: "0.5px",
  color: theme.palette.primary.contrastText,
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

export const VehicleName = styled("h2")(({ theme }) => ({
  display: "inline-block",
  fontSize: "17px",
  fontWeight: "700",
  letterSpacing: "-1px",
  color: theme.palette.text.primary,
  margin: "5px 10px",
}));

export const VehicleDetail = styled("h5")(({ theme }) => ({
  display: "inline-block",
  letterSpacing: "-0.5px",
  color: theme.palette.text.primary,
  margin: "0px 10px 5px",
}));

export const VehicleDescription = styled("p")(() => ({
  fontFamily: "Inter",
  fontSize: "12px",
  fontWeight: "500",
  // textAlign: "justify",
  letterSpacing: "-0.5px",
  margin: "-5px 10px 0 10px",
}));

export const VehicleAddress = styled("h6")(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "500",
  letterSpacing: "0em",
  color: theme.palette.text.disabled,
  margin: "0px 10px",
}));
