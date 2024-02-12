import { IoCart } from "react-icons/io5";

import Badge from "@mui/material/Badge";
import { Theme } from "@mui/material";
interface StyledDishBadgeProps {
  count: number;
}
export const StyledItemBadge: React.FC<StyledDishBadgeProps> = ({
  count,
}: StyledDishBadgeProps): JSX.Element => {
  const badgeStyle = {
    mr: "8px",

    "& .MuiBadge-badge": {
      color: "white",
      fontSize: 12,
      padding: "0 5px",
      right: -6,
      top: 8,
      backgroundColor: "#FF7622",
      border: (theme: Theme) => `2px solid ${theme.palette.background.paper}`,
    },
  };

  return (
    <Badge badgeContent={count} sx={badgeStyle}>
      <IoCart style={{ fontSize: "24px" }} />
    </Badge>
  );
};
