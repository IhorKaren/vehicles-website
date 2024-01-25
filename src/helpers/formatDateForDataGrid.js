export const formatDateForDataGrid = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("ua-UA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};
