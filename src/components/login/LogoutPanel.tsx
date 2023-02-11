import React, { useContext } from 'react'
import AdvertisementContext from '../../store/advertisement-context';
import { StyledBackdrop } from '../UI/Backdrop'
import { GreenButton } from '../UI/Button';
import { StyledLogoutPanel } from './LogoutPanel.style';

import { signOut } from "firebase/auth";
import { auth } from '../../firebase-config';

function LogoutPanel() {

    const statusCtx = useContext(AdvertisementContext);
    const loginCtx = useContext(AdvertisementContext);



    const logoutHandler = () => {

        signOut(auth)
            loginCtx.changeIsLogin(false)
            loginCtx.changeUserEmail('')
            statusCtx.changeDropStatus(false)
    }

  return (
    <>
    <StyledBackdrop onClick={() => statusCtx.changeDropStatus(false) } />
    <StyledLogoutPanel>
      <div>
        <h2>Czy na pewno chcesz się wylogować?</h2>
        <h3>{loginCtx.userEmail}</h3>
        <GreenButton onClick={logoutHandler}>Wyloguj się</GreenButton>
      </div>
    </StyledLogoutPanel>
  </>
  )
}

export default LogoutPanel