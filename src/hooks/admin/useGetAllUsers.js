import { getAllUsers } from "@/api/admin/getAllUsers";
import { useQuery } from "@tanstack/react-query";

const useGetAllUsers = () => {
  const fetchAllUsers = async () => {
    try {
      const data = await getAllUsers();
      return data;
    } catch (error) {
      console.log("Error fetching users");
    }
  };

  return useQuery({
    queryKey: ["admin", "users"],
    queryFn: fetchAllUsers,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};

export default useGetAllUsers;
