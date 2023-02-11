type Action =
  | { type: "titleInput"; payload: string }
  | { type: "priceInput"; payload: string }
  | { type: "descriptionInput"; payload: string }
  | { type: "locationInput"; payload: string }
  | { type: "userNameInput"; payload: string }
  | { type: "emailInput"; payload: string }
  | { type: "phoneNumberInput"; payload: number }
  | { type: "touched"; payload: boolean };

type State = {
  isValid: boolean;
  isTouched: boolean;
  message: string;
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "titleInput": {
      if (action.payload.trim() === "" || action.payload.length < 16) {
        return {
          ...state,
          isValid: false,
          message:
            action.payload === ""
              ? "To pole jest wymagane"
              : "Zamieść minimum 16 znaków",
        };
      } else if (action.payload.length > 80) {
        return {
          ...state,
          isValid: false,
          message: "Maksymalna ilość tekstu wynosi 80 znaków",
        };
      } else {
        return {
          isValid: true,
          isTouched: false,
          message: "",
        };
      }
    }
    case "priceInput": {
      if(action.payload.trim() === ""){
        return {
          ...state,
          isValid: false,
          message: "To pole jest wymagane" 
        };
      }
      else if(Number.isNaN(Number.parseFloat(action.payload))){
        return {
          ...state,
          isValid: false,
          message: "Podaj prawidłowa wartość",
        }
      } else {
        return {
          isValid: true,
          isTouched: false,
          message: "",
        }
    }
  }
    case "descriptionInput": {
      if (action.payload.trim() === "" || action.payload.length < 80) {
        return {
          ...state,
          isValid: false,
          message:
            action.payload === ""
              ? "To pole jest wymagane"
              : "Zamieść minimum 80 znaków",
        };
      } else if (action.payload.length > 9000) {
        return {
          ...state,
          isValid: false,
          message: "Maksymalna ilość tekstu wynosi 9000 znaków",
        };
      } else {
        return {
          isTouched: false,
          isValid: true,
          message: "",
        };
      }
    }
    case "locationInput": {
      if (action.payload.trim() === "") {
        return {
          ...state,
          isValid: false,
          message: "To pole jest wymagane",
        };
      } else {
        return {
          isTouched: false,
          isValid: true,
          message: "",
        };
      }
    }
    case "userNameInput": {
      if (action.payload.trim() === "") {
        return {
          ...state,
          isValid: false,
          message: "To pole jest wymagane",
        };
      } else {
        return {
          isTouched: false,
          isValid: true,
          message: "",
        };
      }
    }
    case "emailInput": {
      const reg = new RegExp(
        "/^[a-zd]+[wd.-]*@(?:[a-zd]+[a-zd-]+.){1,5}[a-z]{2,6}$/i"
      );
      if (action.payload.trim() === "") {
        return {
          ...state,
          isValid: true,
          message: "",
        };
      } else if (!(action.payload.includes("@") && action.payload.length > 8)) {
        return {
          ...state,
          isValid: false,
          message: "Podaj prawidłowy adres email",
        };
      } else {
        return {
          isTouched: false,
          isValid: true,
          message: "",
        };
      }
    }
    case "phoneNumberInput": {
      const reg = new RegExp("!/^([0-9]{9})$/");

      if (
        Number.isInteger(action.payload) &&
        action.payload.toString().length !== 9
      ) {
        return {
          ...state,
          isValid: false,
          message: "Podaj prawidłowy numer telefonu",
        };
      } else {
        return {
          isTouched: false,
          isValid: true,
          message: "",
        };
      }
    }
    case "touched": {
      return {
        ...state,
        isTouched: action.payload,
        message: "",
      };
    }
    default: {
      return {
        isValid: false,
        isTouched: false,
        message: "",
      };
    }
  }
}
