import React, { useContext, useState } from "react";
import { GreenButton } from "../UI/Button";
import { LoginButton } from "../UI/LoginButton";
import { StyledLoginPanel } from "./LoginPanel.style";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import AdvertisementContext from "../../store/advertisement-context";
import { useNavigate } from "react-router-dom";

function LoginPanel() {
  const [email, setEmail] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [emailIsTouched, setEmailIsTouched] = useState<boolean>(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const loginCtx = useContext(AdvertisementContext);
  const navigate = useNavigate();

  const reg = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setFormIsValid(false);
    setEmailIsTouched(false);
    if (!reg.test(event.target.value)) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
  };

  const changePasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
    setFormIsValid(false);
    setPasswordIsTouched(false);
    if (event.target.value.length < 8 || event.target.value.trim() === "") {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    if (emailIsValid && passwordIsValid) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("render");
          const user = userCredential.user;
          console.log(user);
          if (user) {
            setFormIsValid(false);
            loginCtx.changeIsLogin(true);
            loginCtx.changeUserEmail(user.email!);
            navigate("/");
            setEmail("");
            setPassword("");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormIsValid(true);
        });
    }
  };

  return (
    <StyledLoginPanel>
      <form onSubmit={submitHandler}>
        {formIsValid && <span>Email lub hasło jest niepoprawne</span>}
        <div>
          <label htmlFor="email">E-mail</label>
          <input style={!emailIsValid && emailIsTouched ? {border: '2px solid red'} : {border: 'none'}}
            onChange={changeEmailHandler}
            onBlur={() => setEmailIsTouched(true)}
            type="email"
            id="email"
          />
          {!emailIsValid && emailIsTouched && (
            <span>Podaj poprawny adres email</span>
          )}
        </div>
        <div>
          <label htmlFor="password">Hasło</label>
          <input style={!passwordIsValid && passwordIsTouched ? {border: '2px solid red'} : {border: 'none'}}
            onChange={changePasswordHandler}
            onBlur={() => setPasswordIsTouched(true)}
            type="password"
            id="password"
          />
          {!passwordIsValid && passwordIsTouched && (
            <span>Hasło musi zawirać przynajmniej 8 znaków</span>
          )}
        </div>
        <div>
          <span>Nie pamiętasz hasła?</span>
          <GreenButton type="submit">Zaloguj się</GreenButton>
        </div>
      </form>
      <div>
        <div>
          <span></span>
          <span>LUB</span>
          <span></span>
        </div>
        <LoginButton>
          <img src="/images/fbIcon.png" alt="logo facebook" />
          Kontynuuj przez Facebook
        </LoginButton>
        <LoginButton>
          <img src="/images/appleIcon.png" alt="logo facebook" />
          Kontynuuj przez Apple
        </LoginButton>
        <LoginButton>
          <img src="/images/googleIcon.png" alt="logo facebook" />
          Kontynuuj przez Google
        </LoginButton>
        <span>
          Logując się, akceptujesz <strong>regulamin serwisu</strong> OLX.pl w
          jego aktualnym brzmieniu.
        </span>
      </div>
    </StyledLoginPanel>
  );
}

export default LoginPanel;
