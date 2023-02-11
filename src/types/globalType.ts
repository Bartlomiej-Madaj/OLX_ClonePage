export type StyledProps = {
  theme: {
    mainColor: string;
    headerColor: string;
  };
};

export interface Advertisements {
  title: string;
  category: string;
  image: string[];
  price: number;
  date: string;
  location: string;
  id: string;
  description: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  image: string;
}

export interface newAdvertisement {
  id: string;
  date: string;
  title: string;
  price: string;
  isNegotiating: boolean;
  category: string;
  image: (string | undefined)[];
  description: string;
  location: string;
  userName: string;
  email: string;
  phoneNumber: number;
}
