import { Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { chipStatusColors } from "./chipStatusColors";
import { TableChipProps } from "./TableChip.props";

const TableChip = ({ status, sx }) => {
  const theme = useTheme();
  const statusKey = status.toLowerCase();
  let chipColor = "default";
  if (statusKey in chipStatusColors) {
    chipColor =
      chipStatusColors[statusKey] === "pending"
        ? "default"
        : chipStatusColors[statusKey];
  }

  const chipSx = {
    ...sx,
    ...(statusKey === "new" && {
      bgcolor: theme.palette.new.main,
      color: theme.palette.primary.contrastText,
    }),
    ...(statusKey === "pending" && {
      bgcolor: theme.palette.pending.main,
      color: theme.palette.primary.contrastText,
    }),
    ...(statusKey === "cooking" && {
      bgcolor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    }),
  };

  return (
    <Chip
      label={status.toUpperCase()}
      color={chipColor}
      size="small"
      sx={chipSx}
    />
  );
};

export default TableChip;

TableChip.propTypes = TableChipProps;
