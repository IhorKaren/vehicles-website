import { toast } from "react-toastify";

import { CardContent, Typography } from "@mui/material";

import { AppButton } from "@/shared";
import { CloseBtn } from "./CloseBtn/CloseBtn";
import { handleRedirect } from "./helpers/handleRedirect";
import { NotificationContent } from "./NotificationContent";
import {
  NotificationContentProps,
  NotificationToastProps,
} from "./NotificationToast.props";
import {
  StyledToast,
  StyledToastCard,
  StyledToastCardBox,
  StyledToastStack,
} from "./NotificationToastStyled";

export const NotificationToast = ({
  notifications = [],
  navigate,
  closeToast,
}) => {
  const groupedNotifications =
    notifications?.length > 0 &&
    notifications.reduce((acc, notification) => {
      acc[notification.role] = [
        ...(acc[notification.role] || []),
        notification,
      ];
      return acc;
    }, {});

  return (
    <StyledToast>
      {Object.entries(groupedNotifications).map(([role, roleNotifications]) => (
        <StyledToastCard key={role} elevation={5}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <Typography
                component={"span"}
                variant="h5"
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                {roleNotifications?.length}
              </Typography>{" "}
              new Notifications{role !== "user" && ` for ${role}`}
            </Typography>
            <StyledToastCardBox>
              {roleNotifications.map((notification, index) => (
                <NotificationContent key={index} notification={notification} />
              ))}
            </StyledToastCardBox>
          </CardContent>
          <StyledToastStack>
            <AppButton
              variant="contained"
              color="primary"
              fullWidth
              size="small"
              onClick={() => {
                handleRedirect(role, navigate);
                toast.dismiss();
              }}
              label={` View ${role === "user" ? "" : role} Orders`}
              sx={{ width: "50px", height: 28, mx: "auto" }}
            ></AppButton>
          </StyledToastStack>
        </StyledToastCard>
      ))}
      <CloseBtn onClose={closeToast} />
    </StyledToast>
  );
};

NotificationToast.propTypes = NotificationToastProps;
NotificationContent.propTypes = NotificationContentProps;
