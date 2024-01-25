export const removeSpacesFromPhoneNumber = (phoneNumber) =>
  phoneNumber.replace(/ /g, "");

export const addSpacesToPhoneNumber = (phoneNumber) =>
  phoneNumber.replace(
    /(^\+38\(0[0-9]{2}\))([0-9]{3})([0-9]{2})([0-9]{2})$/,
    "$1 $2 $3 $4",
  );
