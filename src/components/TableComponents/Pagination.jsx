import MuiPagination from "@mui/material/Pagination";
import {
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import PropTypes from "prop-types";

const Pagination = ({ page, onPageChange, className }) => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
    />
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export const CustomPagination = (props) => {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
};
