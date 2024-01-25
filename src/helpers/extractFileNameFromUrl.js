export const extractFileNameFromUrl = (url) => {
  return url.split("/").pop().split("?")[0];
};
