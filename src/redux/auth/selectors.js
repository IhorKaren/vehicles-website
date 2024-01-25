export const selectUser = (state) => state.auth.user;
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectRoles = (state) => state.auth.roles;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
