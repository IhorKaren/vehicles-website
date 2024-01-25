export const convertToMoney = (value, currencySymbol = "₴") =>
  value.toLocaleString("uk-UA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + currencySymbol;

// value.toLocaleString('uk-UA', {
//   style: 'currency',
//   currency: 'UAH',
//   currencyDisplay: 'code',
// });
