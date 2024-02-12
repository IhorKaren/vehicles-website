export const convertToMoney = (value: number, currencySymbol = "$") => {
  const formattedValue = value.toLocaleString("uk-UA", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return `${currencySymbol}${formattedValue}`;
};
