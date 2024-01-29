import { FormControl, MenuItem } from "@mui/material";
import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const StyledMenuItem = styled(MenuItem)(
  () => `
    &.MuiMenuItem-root:hover {
      background-color: ${green[200]};
    }
    & .MuiTouchRipple-root span {
      background-color: ${green[600]};
    }
    &.Mui-selected,
    &.Mui-selected:hover {
      background-color: ${green[400]};
    }
  `,
);

export const StyledFormControl = styled(FormControl)(
  () => `

    &&:hover .MuiInputLabel-root:not(.Mui-error) {
      color: ${green};
    }

    && .MuiOutlinedInput-root.Mui-error {
      
      .MuiOutlinedInput-notchedOutline {
        border-color: ${green};
      }
      .MuiInputLabel-root  {
        color: ${green};
      }
    }
    }

    && .MuiMenuItem-root.Mui-disabled.Mui-selected {
      background-color: ${green};
    }

  `,
);
