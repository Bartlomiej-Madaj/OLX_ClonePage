import React, { createContext, useState } from "react";
import { newAdvertisement } from "../types/globalType";

const AdvertisementContext = createContext({
  advertisementData: {
    id: "",
    date: "",
    title: "",
    price: "",
    image: ["", undefined],
    isNegotiating: false,
    category: "",
    description: "",
    location: "",
    userName: "",
    email: "",
    phoneNumber: Number(""),
  },

  dropStatus: false,
  categoryName: "",
  isMobile: false,
  isLogin: false,
  userEmail: "",
  changeUserEmail: (status: string) => {},
  changeIsLogin: (status: boolean) => {},
  changeIsMobile: (status: boolean) => {},
  changedAdvertisementData: (data: newAdvertisement): void => {},
  changeDropStatus: (status: boolean): void => {},
  changeCategoryName: (name: string) => {},
});

type DropContextProviderProps = {
  children?: React.ReactNode;
};

export const AdvertisementContextProvider = ({
  children,
}: DropContextProviderProps) => {
  const [advertisementData, setAdvertisementData] = useState<newAdvertisement>({
    id: "",
    date: "",
    title: "",
    price: "",
    isNegotiating: false,
    category: "",
    image: ["", undefined],
    description: "",
    location: "",
    userName: "",
    email: "",
    phoneNumber: Number(""),
  });
  const [dropStatus, setDropStatus] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");

  function changedAdvertisementData(data: newAdvertisement) {
    setAdvertisementData((prev) => ({
      ...prev,
      ...data,
    }));
  }

  function changeUserEmailHandler(email: string) {
    setUserEmail(email);
  }

  function changeIsMobileHandler(status: boolean) {
    setIsMobile(status);
  }

  function changeIsLoginHandler(status: boolean) {
    setIsLogin(status);
  }

  function changeStatusHandler(status: boolean) {
    setDropStatus(status);
  }

  function changeCategoryNameHandler(name: string) {
    setCategoryName(name);
  }

  const context = {
    advertisementData: advertisementData,
    dropStatus: dropStatus,
    categoryName: categoryName,
    isMobile: isMobile,
    isLogin: isLogin,
    userEmail: userEmail,
    changeUserEmail: changeUserEmailHandler,
    changeIsLogin: changeIsLoginHandler,
    changeIsMobile: changeIsMobileHandler,
    changedAdvertisementData: changedAdvertisementData,
    changeDropStatus: changeStatusHandler,
    changeCategoryName: changeCategoryNameHandler,
  };

  return (
    <AdvertisementContext.Provider value={context}>
      {children}
    </AdvertisementContext.Provider>
  );
};

export default AdvertisementContext;
