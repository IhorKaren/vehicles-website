import { toast } from "react-toastify";

export const validateFile = (file, { maxSize, validTypes }) => {
  if (maxSize && file.size > maxSize) {
    toast.error(`The file is too big. Maximum size is 20 MB`);
    return { isValid: false };
  }
  if (validTypes && !validTypes.some((type) => file.type.startsWith(type))) {
    toast.error("Bad file format");
    return { isValid: false };
  }
  return { isValid: true };
};
