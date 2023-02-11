import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function NewAdertisementOutcome() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default NewAdertisementOutcome;
