import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HeaderComponent } from "./Header.style";
import { Button } from "../UI/Button";
import AdvertisementContext from "../../store/advertisement-context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import LogoutPanel from "../login/LogoutPanel";
import { Link } from "react-router-dom";

const SmallChatBubbleOvalLeftIcon = styled(ChatBubbleOvalLeftIcon)`
  height: 2rem;
  min-height: 2rem;
`;
const SmallHeartIcon = styled(HeartIcon)`
  height: 2rem;
`;
const SmallUserIcon = styled(UserIcon)`
  height: 2rem;
  min-height: 2rem;
  min-width: 2rem;
`;

function Header() {
  const [isDropMenu, setIsDropMenu] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const loginCtx = useContext(AdvertisementContext);
  const statusCtx = useContext(AdvertisementContext);

  if (!loginCtx.isLogin) {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        loginCtx.changeIsLogin(true);
        loginCtx.changeUserEmail(currentUser.email!);
      } else {
        loginCtx.changeIsLogin(false);
        loginCtx.changeUserEmail("");
      }
    });
  }

  const showDropMenu = () => {
    isDropMenu ? setIsDropMenu(false) : setIsDropMenu(true);
  };

  const showLogoutPanel = () => {
    setIsLogout(true);
    statusCtx.changeDropStatus(true);
  };

  return (
    <HeaderComponent isDropMenu={isDropMenu}>
      {isLogout && loginCtx.isLogin && statusCtx.dropStatus && <LogoutPanel />}
      <a href="/">
        <img src="/images/olx_logo_2.png" alt="logo OLX" />
      </a>
      <div>
        <Link onClick={() => setIsDropMenu(false) } to="/messages">
          <SmallChatBubbleOvalLeftIcon />
          <span>Wiadomości</span>
        </Link>
        <Link onClick={() => setIsDropMenu(false) }  to="/favorite">
          <SmallHeartIcon />
        </Link>
        <Link
          onClick={showLogoutPanel}
          to={!loginCtx.userEmail ? "/login" : "#"}
        >
          <SmallUserIcon />
          {loginCtx.userEmail ? (
            <h6>{loginCtx.userEmail}</h6>
          ) : (
            <span>Twoje konto</span>
          )}
        </Link>
        <Button as="a" href="/new-advertisement">
          Dodaj ogłoszenie
        </Button>
      </div>
      <div onClick={showDropMenu}>
        <div />
      </div>
    </HeaderComponent>
  );
}

export default Header;
