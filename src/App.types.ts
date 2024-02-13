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

export type ListingFormValues = {
  fullName: string;
  phone: string;
  seller: string;
  vin: string;
  make: string;
  model: string;
  year: number;
  transmission: string;
  mileage: string;
};

export type ChangeProfileFormValues = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type ChangePasswordFormValues = {
  currentPassword: string;
  password: string;
};

export type CreditCardFormValues = {
  holder: string;
  number: string;
  expiration: string;
  cvc: string;
};

export type Vehicle = {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string[];
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  price: number;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
  createdAt: Date;
};

export type Accessory = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  img: string[];
  createdAt: Date;
};

export type LoginFormValues = {
  email: string;
  password: string;
};
