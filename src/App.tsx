import { createGlobalStyle, ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainOutcome from "./Layout/MainOutcome";
import AdvertisementOutcome from "./Layout/AdvertisementOutcome";
import AdvertisementPage from "./pages/AdvertisementPage";
import LoginPage from "./pages/LoginPage";
import NewAdertisementOutcome from "./Layout/NewAdertisementOutcome";
import NewAdvertisementPage from "./pages/NewAdvertisementPage";
import FavoritePage from "./pages/FavoritePage";
import MessagePage from "./pages/MessagePage";
import { AdvertisementContextProvider } from "./store/advertisement-context";

const GlobalStyle = createGlobalStyle`

:root {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

  body, html{
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  li{
    list-style: none;
  }

  button:focus,
  button:focus-visible {
  outline: 4px auto black;
}

`;

type Theme = {
  headerColor: string;
  mainColor: string;
};

const theme: Theme = {
  headerColor: "#002f34",
  mainColor: "#f2f4f5",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutcome />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/favorite", element: <FavoritePage /> },
      { path: "/messages", element: <MessagePage /> },
    ],
  },
  {
    path: "/:id/:title",
    element: <AdvertisementOutcome />,
    children: [{ index: true, element: <AdvertisementPage /> }],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/new-advertisement",
    element: <NewAdertisementOutcome />,
    children: [{ index: true, element: <NewAdvertisementPage /> }],
  },
]);

const App = () => {
  return (
    <AdvertisementContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AdvertisementContextProvider>
  );
};

export default App;
