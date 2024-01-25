import { useEffect, useState } from "react";

import { getUnreadNotifications } from "@/api/notifications/getUnreadNotifications";
import { useQuery } from "@tanstack/react-query";
const { VITE_API_URL } = import.meta.env;

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [isSseConnected, setIsSseConnected] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: ["unreadNotifications"],
    queryFn: getUnreadNotifications,
    enabled: !isSseConnected,
  });

  useEffect(() => {
    setNotifications(data || []);

    const eventSource = new EventSource(`${VITE_API_URL}/sse`, {
      withCredentials: true,
    });

    eventSource.onmessage = (e) => {
      const newNotifications = JSON.parse(e.data).notifications;
      if (newNotifications) {
        setNotifications((prev) => {
          const updatedNotifications = newNotifications.filter(
            (newNotif) =>
              !prev.some((prevNotif) => prevNotif.id === newNotif.id),
          );
          return [...prev, ...updatedNotifications];
        });
      }
      setIsSseConnected(true);
    };

    eventSource.onerror = () => {
      setIsSseConnected(false);
      refetch();
    };

    return () => {
      eventSource.close();
    };
  }, [data, refetch]);

  return { notifications, isSseConnected };
};
