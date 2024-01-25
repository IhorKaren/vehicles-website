import { useState } from "react";

import { Chip, ListItem, ListItemText, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";

import TableChip from "@/components/TableComponents/TableChip/TableChip";
import { statusToShow } from "@/components/TableComponents/tableHelpers";
import { useMarkNotificationAsRead } from "@/hooks/notifications/useMarkNotificationAsRead";
import { AppButton } from "@/shared";
import { NotificationContentProps } from "../NotificationToast.props";
import {
  StyledNotificationContentChip,
  StyledNotificationContentList,
  StyledNotificationContentListItem,
  StyledNotificationContentListItemText,
} from "./NotificationContentStyled";

export const NotificationContent = ({ notification }) => {
  const [readStatuses, setReadStatuses] = useState({});

  const orderNumber = notification?.orderNumber;
  const updateStatus = statusToShow(notification?.updateStatus);
  const isNewOrder = notification?.type.toLowerCase().includes("new");
  const notificationId = notification?.id;

  const markAsRead = useMarkNotificationAsRead();

  const isRead = !!readStatuses[notificationId];

  const handleMarkAsRead = (notificationId) => {
    markAsRead(notificationId);
    setReadStatuses((prev) => ({ ...prev, [notificationId]: true }));
  };

  const NotificationButton = (
    <AppButton
      onClick={() => handleMarkAsRead(notificationId)}
      title="Mark as read"
      variant="outlined"
      size="small"
      sx={{ maxHeight: "24px", width: "125px" }}
      label={!isRead ? "Mark as read" : "Message read"}
      disabled={isRead}
    />
  );

  return (
    <StyledNotificationContentList dense>
      {isNewOrder && (
        <>
          <StyledNotificationContentListItem>
            <Stack direction="row" spacing={3} alignItems="center">
              <StyledNotificationContentListItemText primary="Your New order:" />
              <StyledNotificationContentChip label={orderNumber} size="small" />

              {NotificationButton}
            </Stack>
          </StyledNotificationContentListItem>
          <Divider variant="middle" sx={{ mt: 3 }} />
        </>
      )}
      {orderNumber && !isNewOrder && (
        <>
          <ListItem sx={{ pb: 0 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ListItemText primary="№" />
              <Chip label={orderNumber} size="small" sx={{ minWidth: 116 }} />

              <TableChip
                status={updateStatus}
                size="small"
                sx={{ minWidth: 116 }}
              />

              {NotificationButton}
            </Stack>
          </ListItem>
          <Divider variant="middle" sx={{ mt: 3 }} />
        </>
      )}
    </StyledNotificationContentList>
  );
};

NotificationContent.propTypes = NotificationContentProps;
