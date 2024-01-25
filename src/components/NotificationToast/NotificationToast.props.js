import PropTypes from "prop-types";

export const NotificationToastProps = {
  notifications: PropTypes.array,
  navigate: PropTypes.func,
};

export const NotificationContentProps = { content: PropTypes.string };
