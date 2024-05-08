type AddressType = {
  city: string;
  country: string;
};

interface IUser {
  name: string;
  age: number;
  email: string;
  address?: AddressType;
}

const mango: IUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: IUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
