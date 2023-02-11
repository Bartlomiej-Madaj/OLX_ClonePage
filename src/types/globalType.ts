export type StyledProps = {
  theme: {
    mainColor: string;
    headerColor: string;
  };
};
export interface CategoryItem {
  id: string;
  title: string;
  image: string;
}

export interface newAdvertisement {
  id: string;
  date: number;
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

export interface Favorite {
  id: string;
  title: string;
  image: string;
  note: string;
  description: string;
}
