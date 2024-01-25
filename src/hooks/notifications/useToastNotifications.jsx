import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { NotificationToast } from "@/components/NotificationToast";
import { selectShowToast } from "@/redux/notifications/notificationsSliceSelectors";
import { useNotifications } from "./useNotifications";

export const useToastNotifications = (navigate) => {
  const canShowToasts = useSelector(selectShowToast);
  const { notifications } = useNotifications();
  const toastIdRef = useRef(null);
  const lastNotificationId = useRef(null);

  useEffect(() => {
    const latestNotification =
      notifications && notifications.length > 0
        ? notifications[notifications.length - 1]
        : null;

    if (
      latestNotification &&
      lastNotificationId.current !== latestNotification.id
    ) {
      const content = (
        <NotificationToast notifications={notifications} navigate={navigate} />
      );

      if (toast.isActive(toastIdRef.current)) {
        toast.update(toastIdRef.current, { render: content, autoClose: false });
      } else if (canShowToasts) {
        toastIdRef.current = toast(content, {
          autoClose: false,
          closeOnClick: false,
          position: "top-left",
          closeButton: false,
          style: { width: "500px", marginTop: "30px", marginLeft: "20vw" },
          onClose: () => {
            toastIdRef.current = null;
          },
        });
      }

      lastNotificationId.current = latestNotification.id;
    }
  }, [notifications, navigate, canShowToasts]);

  return notifications;
};
