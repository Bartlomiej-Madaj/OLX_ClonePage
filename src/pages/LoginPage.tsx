import React, { useState } from "react";
import Login from "../components/login/Login";
import { StyledLoginPage } from "./LoginPage.style";

function LoginPage() {
  const [activeValue, setActiveValue] = useState(false);

  const active = (active: boolean) => {
    setActiveValue(active);
  };

  return (
    <StyledLoginPage activeValue={activeValue}>
      <Login onActive={active} />
    </StyledLoginPage>
  );
}

export default LoginPage;
