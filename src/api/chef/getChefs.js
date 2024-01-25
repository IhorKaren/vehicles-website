import { publicInstance } from "../axios";

export const getChefs = async ({
  search = "",
  pageParam = 1,
  limit = 10,
  isAvailable = "all",
}) => {
  let queryString = "";

  if (search !== undefined && search !== "") {
    queryString += `name=${search}&`;
  }
  if (isAvailable !== null && isAvailable !== "all") {
    queryString += `isAvailable=${isAvailable}`;
  }

  queryString = queryString.replace(/&$/, "");

  const { data } = await publicInstance.get(
    `/chefs?page=${pageParam}&limit=${limit}&${queryString}`,
  );

  return data;
};
