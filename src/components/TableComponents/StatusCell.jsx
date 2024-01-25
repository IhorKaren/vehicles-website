import PropTypes from "prop-types";

import TableChip from "@/components/TableComponents/TableChip/TableChip";
import { statusToShow } from "./tableHelpers";

export const StatusCell = ({ value }) => {
  return <TableChip status={statusToShow(value)} sx={{ width: 110 }} />;
};

StatusCell.propTypes = {
  value: PropTypes.string.isRequired,
};
