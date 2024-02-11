import mockUser from "./data";

type Role = {
  name: string;
  id: string;
};
  
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  avatar: string;
  phoneNumber: string;
  favoriteVehicles: any[]; 
  favoriteAccessories: any[]; 
  roles: Role[]; 
  accountStatus: string; 
};

export const getFavorite = (userId: string, favoriteType: 'vehicles' | 'accessories') => {
  const user: User | undefined = mockUser.find((user) => user.id === userId);
  if (!user) {
    return [];
  }
  if (favoriteType === 'vehicles') {
    return user.favoriteVehicles;
  } else if (favoriteType === 'accessories') {
    return user.favoriteAccessories;
  }
  return [];
};
