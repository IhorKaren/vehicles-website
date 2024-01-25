import { Chip, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledNotificationContentList = styled(List)({
  margin: "4px 0px",
});

export const StyledNotificationContentListItem = styled(ListItem)({
  paddingBottom: 0,
});

export const StyledNotificationContentListItemText = styled(ListItemText)({
  flexGrow: 1,
});

export const StyledNotificationContentChip = styled(Chip)({
  minWidth: 116,
  height: 24,
});
