export const selectUnreadNotificationsCount = (state) =>
  state.notifications.unreadCount;

export const selectShowToast = (state) => state.notifications.showToasts;
