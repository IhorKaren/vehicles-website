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
  companyCode?: string;
  companyAddress?: string;
  email: string;
  password: string;
};

export type ChangeProfileFormValues = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type ChangePasswordFormValues = {
  oldPassword: string;
  password: string;
};

export type CreditCardFormValues = {
  number: string;
  month: string;
  year: string;
  cvc: string;
};

export type Vehicle = {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  price: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
};

export type Accessory = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  img: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};
