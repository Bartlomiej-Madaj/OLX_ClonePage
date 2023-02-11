import React, { useState } from "react";
import { GreenButton } from "../UI/Button";
import { LoginButton } from "../UI/LoginButton";
import { StyledRegistrationPanel } from "./RegistrationPanel.style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

function RegistrationPanel() {
  const [email, setEmail] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [emailIsTouched, setEmailIsTouched] = useState<boolean>(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [checkboxIsChecked, setCheckboxIsChecked] = useState<boolean>(false);
  const [checkboxIsValid, setCheckboxIsValid] = useState<boolean>(true);
  const [emailAlreadyIsUsed, setEmailAlreadyIsUsed] = useState<boolean>(false);

  const reg = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailIsTouched(false);
    setEmailAlreadyIsUsed(false);
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
    setPasswordIsTouched(false);
    if (event.target.value.length < 8 || event.target.value.trim() === "") {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!checkboxIsChecked) {
      setCheckboxIsValid(false);
    }
    if (emailIsValid && passwordIsValid && checkboxIsChecked) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user) {
            setEmail("");
            setPassword("");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          setEmailAlreadyIsUsed(errorCode === "auth/email-already-in-use");
        });
    }
  };

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxIsChecked(event.target.checked);
    setCheckboxIsValid(true);
  };

  return (
    <StyledRegistrationPanel>
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
      <div>
        <span></span>
        <span>LUB</span>
        <span></span>
      </div>
      <form onSubmit={submitHandler}>
        <span>
          {emailAlreadyIsUsed && "Konto o podanym adresie email już istnieje"}
        </span>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            style={
              !emailIsValid && emailIsTouched
                ? { border: "2px solid red" }
                : { border: "none" }
            }
            onChange={changeEmailHandler}
            onBlur={() => setEmailIsTouched(true)}
            value={email}
            type="email"
            id="email"
          />
          {!emailIsValid && emailIsTouched && (
            <span>Podaj poprawny adres email</span>
          )}
        </div>
        <div>
          <label htmlFor="password">Hasło</label>
          <input
            style={
              !passwordIsValid && passwordIsTouched
                ? { border: "2px solid red" }
                : { border: "none" }
            }
            onChange={changePasswordHandler}
            onBlur={() => setPasswordIsTouched(true)}
            value={password}
            type="password"
            id="password"
          />
          {!passwordIsValid && passwordIsTouched && (
            <span>Hasło musi zawirać przynajmniej 8 znaków</span>
          )}
        </div>
        <div>
          <span>
            Klikając “Załóż konto”, akceptuję=
            <a href="#">
              <strong>Regulamin serwisu</strong>
            </a>=
            OLX
          </span>
          <span>
            Przyjmuję do wiadomości, że OLX wykorzystuje moje dane osobowe
            zgodnie z Polityką prywatności oraz Polityką dotyczącą plików cookie
            i podobnych technologii. OLX wykorzystuje zautomatyzowane systemy i
            partnerów do analizowania, w jaki sposób korzystam z usług w celu
            zapewnienia odpowiedniej funkcjonalności produktu, treści,
            dostosowanych i opartych na zainteresowaniach reklam, jak również
            ochrony przed spamem, złośliwym oprogramowaniem i nieuprawnionym
            korzystaniem z naszych usług.
          </span>
          <div>
            {!checkboxIsValid && <span>To pole wymaga zaznaczenia</span>}
            <input onChange={checkboxHandler} type="checkbox" />
            <span>
              Wyrażam zgodę na używanie przez Grupę OLX sp. z o.o. środków
              komunikacji elektronicznej oraz telekomunikacyjnych urządzeń
              końcowych w celu przesyłania mi informacji handlowych oraz
              prowadzenia marketingu (np. newsletter, wiadomości SMS) przez
              Grupę OLX sp. z o.o., podmioty powiązane i partnerów biznesowych.
              Moja zgoda obejmuje numery telefonów i adresy e-mail
              wykorzystywane podczas korzystania z usług Grupy OLX Sp. z o.o.
              Wyrażoną zgodę można wycofać lub ograniczyć w dowolnej chwili za
              pomocą odpowiednich ustawień konta lub zgłaszając nam takie
              żądanie.
            </span>
          </div>
          <div>
            <GreenButton type="submit">Załóż konto</GreenButton>
          </div>
        </div>
      </form>
    </StyledRegistrationPanel>
  );
}

export default RegistrationPanel;
