export const route = Object.freeze({
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",

  HOME: "/",
  vehicles: "/vehicles",
  FAVORITE_vehicles: "vehicles/favorites",
  FAVORITE_OWNERS: "owners/favorites",

  OWNER: "/owner",
  USER_ORDERS: "/orders",
  ORDERS_PAYMENT: "/orders/payment",
  CREATE_ORDER: "/create-order",

  USER_ACCOUNT: "/user-account",

  OWNER_ACCOUNT: "/owner-account",
  OWNER_SIGN_UP: "/owner-account/sign-up",
  OWNER_PROFILE: "/owner-account/profile",
  OWNER_ORDERS: "/owner-account/orders",
  VEHICLES: "/OWNER-account/vehicles",
  OWNER_CREATE_DISH: "/owner-account/vehicles/create",
  OWNER_EDIT_DISH: "/owner-account/vehicles/edit/:id",

  COURIER_ACCOUNT: "/courier-account",
  COURIER_SIGN_UP: "/courier-account/sign-up",
  COURIER_PROFILE: "/courier-account/profile",
  COURIER_ORDERS: "/courier-account/orders",

  ADMIN: "/admin",
  ADMIN_OWNERS: "/admin/owners",

  NOTIFICATIONS: "/notifications",
});
