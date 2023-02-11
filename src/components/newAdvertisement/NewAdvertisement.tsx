import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { StyledNewAdvertisement } from "./NewAdvertisement.style";
import { CameraIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";
import { GreenButton } from "../UI/Button";
import ChosenCategory from "./ChosenCategory";
import AdvertisementContext from "../../store/advertisement-context";
import { reducer } from "../../helper/reducer";
import AdvertisementView from "./AdvertisementView";
import { categoryWithPrice } from "../../data/data";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../../firebase-config";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "@firebase/storage";
import { newAdvertisement } from "../../types/globalType";

const SmallCameraIcon = styled(CameraIcon)`
  height: 1.5rem;
`;
// export interface newAdvertisement {
//   id: string;
//   date: string;
//   title: string;
//   price: string;
//   isNegotiating: boolean;
//   category: string;
//   image: (string | undefined)[];
//   description: string;
//   location: string;
//   userName: string;
//   email: string;
//   phoneNumber: number;
// }

type State = {
  isValid: boolean;
  isTouched: boolean;
  message: string;
};

const initialStatus: State = {
  isValid: false,
  isTouched: false,
  message: "",
};

function NewAdvertisement() {
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [imagesList, setImagesList] = useState<(string | undefined)[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  imagesList.length = 8;

  const advertisementImages = [...imagesList].filter((item) => item !== "");

  const statusCtx = useContext(AdvertisementContext);
  const categoryCtx = useContext(AdvertisementContext);
  const advertisementViewCtx = useContext(AdvertisementContext);
  const mobileCtx = useContext(AdvertisementContext);
  const loginCtx = useContext(AdvertisementContext);
  const [title, setTitle] = useState("");
  // console.log(title);
  const [titleIsValid, dispatchTitle] = useReducer(reducer, initialStatus);
  const [showCategory, setShowCategory] = useState(false);
  const [price, setPrice] = useState("");
  const [isNegotiating, setIsNegotiating] = useState(false);
  const [priceIsValid, dispatchPrice] = useReducer(reducer, initialStatus);
  const [categoryIsTouched, setCategoryIsTouched] = useState(false);
  const [categoryIsValid, setCategoryIsValid] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionIsValid, dispatchDescription] = useReducer(
    reducer,
    initialStatus
  );
  const [location, setLocation] = useState("");
  const [locationIsValid, dispatchLocation] = useReducer(
    reducer,
    initialStatus
  );
  const [userName, setUsername] = useState("");
  const [userNameIsValid, dispatchUserName] = useReducer(
    reducer,
    initialStatus
  );
  const [email, setEmail] = useState("");
  const [emailIsValid, dispatchEmail] = useReducer(reducer, initialStatus);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberIsValid, dispatchPhoneNumber] = useReducer(
    reducer,
    initialStatus
  );

  const [formIsValid, setFormIsValid] = useState(false);

  const dragItem = useRef<number | null>(null);
  const dragEnterItem = useRef<number | null>(null);

  useEffect(() => {
    statusCtx.dropStatus && showCategory && !mobileCtx.isMobile
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "auto");
  }, [statusCtx.dropStatus, showCategory]);

  useEffect(() => {
    if (
      titleIsValid.isValid &&
      descriptionIsValid.isValid &&
      locationIsValid.isValid &&
      userNameIsValid.isValid &&
      emailIsValid.isValid &&
      phoneNumberIsValid.isValid &&
      categoryIsValid &&
      loginCtx.isLogin
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    titleIsValid.isValid,
    descriptionIsValid.isValid,
    locationIsValid.isValid,
    userNameIsValid.isValid,
    emailIsValid.isValid,
    phoneNumberIsValid.isValid,
    categoryIsValid,
    loginCtx.isLogin,
  ]);

  const handleSort = () => {
    const dragEl = imagesList.find((_, index) => dragItem.current === index);
    const dropEl = imagesList.find(
      (_, index) => dragEnterItem.current === index
    );

    let copyImageList: (string | undefined)[] = imagesList.map(
      (item, index) => {
        if (index === dragEnterItem.current) {
          return dragEl;
        } else if (index === dragItem.current) {
          return dropEl;
        } else {
          return item;
        }
      }
    );

    dragItem.current = null;
    dragEnterItem.current = null;

    // if(!copyImageList[0]) return;

    setImagesList(copyImageList);
  };

  const handleCategory = () => {
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "smooth";
    statusCtx.changeDropStatus(true);
    setAdvertisementViewIsShown(false);
    setShowCategory(true);
  };

  function changeTitleHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    dispatchTitle({ type: "titleInput", payload: event.target.value });
  }
  const blurTitleHandler = () => {
    dispatchTitle({ type: "touched", payload: true });
    dispatchTitle({ type: "titleInput", payload: title });
  };
  const titleInputIsInvalid = !titleIsValid.isValid && titleIsValid.isTouched;

  const blurCategoryHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!categoryCtx.categoryName) {
      setCategoryIsTouched(true);
    } else {
      setCategoryIsTouched(false);
    }
  };
  const categoryInputIsInvalid = !categoryCtx.categoryName && categoryIsTouched;
  const bluredMessage = <span>To pole jest wymagane</span>;

  useEffect(() => {
    if (categoryCtx.categoryName) {
      setCategoryIsValid(true);
    }
  }, [categoryCtx.categoryName]);

  const changePriceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const blurPriceHandler = () => {
    dispatchPrice({ type: "touched", payload: true });
    dispatchPrice({ type: "priceInput", payload: price });
  };
  const priceInputIsInvalid = !priceIsValid.isValid && priceIsValid.isTouched;

  const selectNegotiationValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setIsNegotiating(() => (event.target.value === "true" ? true : false));
  };

  const changeDescriptionHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
    dispatchDescription({
      type: "descriptionInput",
      payload: event.target.value,
    });
  };

  const blurDescriptionHandler = () => {
    dispatchDescription({ type: "touched", payload: true });
    dispatchDescription({ type: "descriptionInput", payload: description });
  };

  const descriptionInputIsInvalid =
    !descriptionIsValid.isValid && descriptionIsValid.isTouched;

  const changeLocationHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocation(event.target.value);
    dispatchLocation({ type: "locationInput", payload: event.target.value });
  };
  const blurLocationHandler = () => {
    dispatchLocation({ type: "touched", payload: true });
    dispatchLocation({ type: "locationInput", payload: location });
  };
  const locationInputIsInvalid =
    !locationIsValid.isValid && locationIsValid.isTouched;

  const changeUserNameHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(event.target.value);
    dispatchUserName({ type: "userNameInput", payload: event.target.value });
  };
  const blurUserNameHandler = () => {
    dispatchUserName({ type: "touched", payload: true });
    dispatchUserName({ type: "userNameInput", payload: userName });
  };
  const userNameInputIsInvalid =
    !userNameIsValid.isValid && userNameIsValid.isTouched;

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    dispatchEmail({ type: "emailInput", payload: event.target.value });
  };
  const blurEmailHandler = () => {
    dispatchEmail({ type: "touched", payload: true });
    dispatchEmail({ type: "emailInput", payload: email });
  };
  const emailInputIsInvalid = !emailIsValid.isValid && emailIsValid.isTouched;

  const changePhoneNumberHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
    dispatchPhoneNumber({
      type: "phoneNumberInput",
      payload: Number.parseInt(event.target.value),
    });
  };
  const blurPhoneNumberHandler = () => {
    dispatchPhoneNumber({ type: "touched", payload: true });
    dispatchPhoneNumber({
      type: "phoneNumberInput",
      payload: Number.parseInt(phoneNumber),
    });
  };
  const phoneNumberInputIsInvalid =
    !phoneNumberIsValid.isValid && phoneNumberIsValid.isTouched;

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newAdvertisement: newAdvertisement = {
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
      title: title,
      price: price,
      image: advertisementImages,
      isNegotiating: isNegotiating,
      category: categoryCtx.categoryName,
      description: description,
      location: location,
      userName: userName,
      email: email,
      phoneNumber: Number.parseInt(phoneNumber),
    };

    const addsCollectionRef = collection(db, "Adds");

    const createAdvertisement = async () => {
      await addDoc(addsCollectionRef, newAdvertisement);
    };

    setTitle("");
    setDescription("");
    setLocation("");
    setUsername("");
    setPrice("");
    setEmail("");
    setPhoneNumber("");
    categoryCtx.changeCategoryName("");

    if (formIsValid) {
      // console.log(newAdvertisement);

      createAdvertisement();
    }
  };

  const [advertisementViewIsShown, setAdvertisementViewIsShown] =
    useState(false);

  const showAdvertisementView = () => {
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "smooth";
    setShowCategory(false);
    statusCtx.changeDropStatus(true);
    setAdvertisementViewIsShown(true);
    advertisementViewCtx.changedAdvertisementData({
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
      title: title,
      price: price,
      image: advertisementImages,
      isNegotiating: isNegotiating,
      category: categoryCtx.categoryName,
      description: description,
      location: location,
      userName: userName,
      email: email,
      phoneNumber: Number.parseInt(phoneNumber),
    });
  };

  const [isPrice, setIsPrice] = useState(false);

  useEffect(() => {
    if (categoryWithPrice.some((item) => item === categoryCtx.categoryName)) {
      setIsPrice(true);
    } else {
      setIsPrice(false);
    }
  }, [categoryCtx.categoryName]);

  //////////////////////////////////////////////// Handle to add images

  const [privateIndex, setPrivetIndex] = useState<string>("");

  useEffect(() => {
    setPrivetIndex(crypto.randomUUID());
  }, []);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    setSelectFile(event.target.files[0]);

    // if (!selectFile) return;
    // const imageRef = ref(
    //   storage,
    //   `addsImages/${privateIndex}/${selectFile?.name + crypto.randomUUID()}`
    // );
    // uploadBytes(imageRef, selectFile).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImagesList((prev) => [url, ...prev]);
    //   });
    //   console.log("Upload image");
    // });
  };

  const imageListRef = ref(storage, `addsImages/${privateIndex}`);
  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        console.log(response.items);
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            if (url) {
              setImagesList((prev) => {
                if (!prev.includes(url)) {
                  return [url, ...prev];
                } else {
                  return [...prev];
                }
              });
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  console.log(hiddenFileInput.current?.getBoundingClientRect())

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (hiddenFileInput.current === null) return;

    hiddenFileInput.current.click();
  };

  const sendPhotoHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!selectFile) return;
    const imageRef = ref(
      storage,
      `addsImages/${privateIndex}/${selectFile?.name + crypto.randomUUID()}`
    );
    uploadBytes(imageRef, selectFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImagesList((prev) => [url, ...prev]);
      });
      console.log("Upload image");
    });
  };

  return (
    <>
      {statusCtx.dropStatus && showCategory && <ChosenCategory />}
      {statusCtx.dropStatus && advertisementViewIsShown && (
        <AdvertisementView />
      )}
      <StyledNewAdvertisement
        advertisementViewIsShown={statusCtx.dropStatus}
        disabled={formIsValid}
        onSubmit={handleSubmitForm}
      >
        <h1>Dodaj ogłoszenie</h1>
        <div>
          <h3>Im więcej szczegółów, tym lepiej!</h3>
          <div>
            <label htmlFor="title">Tytuł ogłoszenia*</label>
            <input
              value={title}
              onChange={changeTitleHandler}
              onBlur={blurTitleHandler}
              placeholder="np. iPhone 11 na gwarancji"
              type="text"
              id="title"
            />
            {titleInputIsInvalid && <span>{titleIsValid.message}</span>}
          </div>
          <div>
            <label htmlFor="category">Kategoria*</label>
            <input
              readOnly
              placeholder="Wybierz kategorie"
              defaultValue={categoryCtx.categoryName}
              onClick={handleCategory}
              onBlur={blurCategoryHandler}
              id="category"
            />
            {categoryInputIsInvalid && bluredMessage}
          </div>
        </div>

        {isPrice && (
          <section>
            <h3>Cena towaru/produktu/usługi</h3>
            <div>
              <label htmlFor="price">Podaj cenę w PLN*</label>
              <input
                value={price}
                onChange={changePriceHandler}
                onBlur={blurPriceHandler}
                placeholder="Cena towaru/produktu/usługi"
                type="text"
                id="price"
              />
              {priceInputIsInvalid && <span>{priceIsValid.message}</span>}
            </div>
            <div>
              <label htmlFor="negotiate ">
                Cena do negocjacji?{" "}
                <span>(wartość domyślna to "nie do negocjacji")</span>
              </label>
              <select
                onChange={selectNegotiationValue}
                name="negotiate "
                id="negotiate"
              >
                <option value="false">Nie do negocjacji</option>
                <option value="true">Do negocjacji</option>
              </select>
            </div>
          </section>
        )}

        <div>
          <h3>Zdjęcia</h3>
          <span>
            Piersze zdjęcie będzie zdjęciem głównym. Przeciągaj zdjęcia na inne
            miejsca, aby zmienić ich kolejność.
          </span>
          <div>
            <div>
              <button type="button" onClick={handleClick}>
                Wybierz zdęcie
              </button>
              <input
                name="update"
                type="file"
                onChange={handleFile}
                ref={hiddenFileInput}
                id="addImage"
                accept="image/*"
              />
              <button type="button" onClick={sendPhotoHandler}>
                Dodaj zdjęcie
              </button>
            </div>
            {imagesList.map((item, index) => {
              return (
                <div
                  style={{ backgroundImage: `url(${item})` }}
                  key={index}
                  draggable
                  onDragStart={() => {
                    dragItem.current = index;
                  }}
                  onDragEnter={() => {
                    dragEnterItem.current = index;
                  }}
                  onDragEnd={handleSort}
                  onDragOver={(event) => event.preventDefault()}
                >
                  {!item && <SmallCameraIcon />}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="description">Opis*</label>
            <textarea
              value={description}
              onChange={changeDescriptionHandler}
              onBlur={blurDescriptionHandler}
              name="description"
              id="description"
              cols={60}
              rows={15}
            ></textarea>
            {descriptionInputIsInvalid && (
              <span>{descriptionIsValid.message}</span>
            )}
          </div>
          <div>
            {description.length < 80 && (
              <span>
                Wpisz jeszcze przynajmniej {80 - description.length} znaków
              </span>
            )}
            <span>{description.length}/9000</span>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="location">Lokalizacja*</label>
            <input
              value={location}
              onChange={changeLocationHandler}
              onBlur={blurLocationHandler}
              placeholder="Miejscowość"
              type="text"
              id="location"
            />
            {locationInputIsInvalid && <span>{locationIsValid.message}</span>}
          </div>
        </div>
        <div>
          <h3>Dane Kontaktowe</h3>
          <div>
            <label htmlFor="user">Osoba kontaktowa*</label>
            <input
              type="text"
              id="user"
              value={userName}
              onChange={changeUserNameHandler}
              onBlur={blurUserNameHandler}
            />
            {userNameInputIsInvalid && <span>{userNameIsValid.message}</span>}
          </div>
          <div>
            <label htmlFor="email">Adres e-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={changeEmailHandler}
              onBlur={blurEmailHandler}
            />
            {emailInputIsInvalid && <span>{emailIsValid.message}</span>}
          </div>
          <div>
            <label htmlFor="phone-number">Numer telefonu</label>
            <input
              type="tel"
              id="phone-number"
              value={phoneNumber}
              onChange={changePhoneNumberHandler}
              onBlur={blurPhoneNumberHandler}
            />
            {phoneNumberInputIsInvalid && (
              <span>{phoneNumberIsValid.message}</span>
            )}
          </div>
        </div>
        <div>
          {!loginCtx.isLogin && (
            <span>
              Aby dodać ogłoszenie{" "}
              <a href="/login">
                <u>zaloguj się</u>
              </a>
            </span>
          )}
          <button type="button" onClick={showAdvertisementView}>
            Podgląd ogłoszenia
          </button>
          <GreenButton disabled={!formIsValid} type="submit">
            Dodaj ogłoszenie
          </GreenButton>
        </div>
      </StyledNewAdvertisement>
    </>
  );
}

export default NewAdvertisement;
