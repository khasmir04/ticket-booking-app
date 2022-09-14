import { LoginButton, LogoutButton, Greeting } from "./Greeting";
import { useState } from "react";

const LoginControl = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const isLoggedIn = userLoggedIn;

  let button = null;
  if (isLoggedIn) {
    button = <LogoutButton onClick={() => setUserLoggedIn(false)} />;
  } else {
    button = <LoginButton onClick={() => setUserLoggedIn(true)} />;
  }
  return (
    <>
      <Greeting title={"HELLO"} isLoggedIn={isLoggedIn} />
      {button}
    </>
  );
};

export default LoginControl;
