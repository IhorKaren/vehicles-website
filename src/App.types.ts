export type User = {
  firstName: string;
  lastName: string;
  accountType: string;
  membership: string;
  email: string;
  password?: string;
  token?: string;
};

export type State = {
  user: User;
  token: string | undefined;
  error: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};

export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  accountType: string;
  companyName?: string;
  email: string;
  password: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};
