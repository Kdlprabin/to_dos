import LoginContext from "./LoginContext";
import { useState } from "react";
const LoginState = (props) => {
  const [login, setLogin] = {
    isLogined: false,
  };
  const update = () => {
    setLogin({
      isLogined: true,
    });
  };
  return (
    <LoginContext.Provider value={{ state: login, update: update }}>
      {props.children}
    </LoginContext.Provider>
  );
};
