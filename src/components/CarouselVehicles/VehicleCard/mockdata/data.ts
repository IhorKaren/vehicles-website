const mockUser = [
  {
    id: "user1",
    firstName: "John",
    lastName: "Doe",
    password: "hashedpassword123",
    email: "john.doe@example.com",
    avatar: "https://example.com/avatar.jpg",
    phoneNumber: "123-456-7890",
    favoriteVehicles: [9611162, 963030],
    favoriteAccessories: [1, 5],
    cart: {
      items: [
        { accessoryId: 5, count: 2 },
        { accessoryId: 8, count: 1 },
      ],
    },
    roles: [{ name: "private", id: "role_id_1" }],
    accountStatus: "ACTIVE",
  },
];

export default mockUser;
