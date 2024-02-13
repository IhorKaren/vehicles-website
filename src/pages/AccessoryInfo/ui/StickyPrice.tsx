import React from "react";
import { Typography, Paper, styled } from "@mui/material";
import { format } from "date-fns";
import { Accessory } from "../../../App.types";
import { convertToMoney } from "../../../helpers/convertToMoney";

type TopTitleProps = {
  accessory: Accessory;
};

const TOP_BAR_HEIGHT = 55;

const StickyContainer = styled(Paper)(({ theme }) => ({
  position: "sticky",
  top: `${TOP_BAR_HEIGHT}px`,
  zIndex: 99,
  padding: theme.spacing(1, 2),
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  backgroundColor: "#282b25",
  color: theme.palette.common.white,
  gap: theme.spacing(1),
}));

export const StickyPrice: React.FC<TopTitleProps> = ({ accessory }) => {
  const formattedDate = format(new Date(accessory.createdAt), "M/d/yy");

  return (
    <StickyContainer elevation={3}>
      <Typography variant="body1" sx={{ display: { xs: "none", sm: "block" } }}>
        Sold for
      </Typography>
      <Typography variant="body2">{convertToMoney(accessory.price)}</Typography>
      <Typography
        variant="body2"
        sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}
      >
        Created:
      </Typography>
      <Typography variant="body2" sx={{ ml: { xs: "auto", sm: 0 } }}>
        {formattedDate}
      </Typography>
    </StickyContainer>
  );
};
