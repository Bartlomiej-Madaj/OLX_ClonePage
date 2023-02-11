import React, { useState } from "react";
import { StyledLogin } from "./Login.style";
import LoginPanel from "./LoginPanel";
import RegistrationPanel from "./RegistrationPanel";

type Props = {
  onActive: (active: boolean) => void;
};

function Login(props: Props) {
  const [activeLogin, setActiveLogin] = useState(true);
  const [activeRegistration, setActiveRegistration] = useState(false);

  props.onActive(activeRegistration);

  return (
    <StyledLogin
      activeLogin={activeLogin}
      activeRegistration={activeRegistration}
    >
      <div>
        <button type="button"
          onClick={() => {
            setActiveLogin(true);
            setActiveRegistration(false);
          }}
        >
          Zaloguj się
        </button>
        <button type="button"
          onClick={() => {
            setActiveLogin(false);
            setActiveRegistration(true);
          }}
        >
          Załóż konto
        </button>
      </div>
      {activeLogin ? <LoginPanel /> : <RegistrationPanel />}
    </StyledLogin>
  );
}

export default Login;
