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
          {emailAlreadyIsUsed && "Konto o podanym adresie email ju?? istnieje"}
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
          <label htmlFor="password">Has??o</label>
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
            <span>Has??o musi zawira?? przynajmniej 8 znak??w</span>
          )}
        </div>
        <div>
          <span>
            Klikaj??c ???Za?????? konto???, akceptuj??=
            <a href="#">
              <strong>Regulamin serwisu</strong>
            </a>=
            OLX
          </span>
          <span>
            Przyjmuj?? do wiadomo??ci, ??e OLX wykorzystuje moje dane osobowe
            zgodnie z Polityk?? prywatno??ci oraz Polityk?? dotycz??c?? plik??w cookie
            i podobnych technologii. OLX wykorzystuje zautomatyzowane systemy i
            partner??w do analizowania, w jaki spos??b korzystam z us??ug w celu
            zapewnienia odpowiedniej funkcjonalno??ci produktu, tre??ci,
            dostosowanych i opartych na zainteresowaniach reklam, jak r??wnie??
            ochrony przed spamem, z??o??liwym oprogramowaniem i nieuprawnionym
            korzystaniem z naszych us??ug.
          </span>
          <div>
            {!checkboxIsValid && <span>To pole wymaga zaznaczenia</span>}
            <input onChange={checkboxHandler} type="checkbox" />
            <span>
              Wyra??am zgod?? na u??ywanie przez Grup?? OLX sp. z o.o. ??rodk??w
              komunikacji elektronicznej oraz telekomunikacyjnych urz??dze??
              ko??cowych w celu przesy??ania mi informacji handlowych oraz
              prowadzenia marketingu (np. newsletter, wiadomo??ci SMS) przez
              Grup?? OLX sp. z o.o., podmioty powi??zane i partner??w biznesowych.
              Moja zgoda obejmuje numery telefon??w i adresy e-mail
              wykorzystywane podczas korzystania z us??ug Grupy OLX Sp. z o.o.
              Wyra??on?? zgod?? mo??na wycofa?? lub ograniczy?? w dowolnej chwili za
              pomoc?? odpowiednich ustawie?? konta lub zg??aszaj??c nam takie
              ????danie.
            </span>
          </div>
          <div>
            <GreenButton type="submit">Za?????? konto</GreenButton>
          </div>
        </div>
      </form>
    </StyledRegistrationPanel>
  );
}

export default RegistrationPanel;
