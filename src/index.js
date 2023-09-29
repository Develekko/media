import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core"
import "animate.css/animate.min.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <App/>
        </NextThemesProvider>
      </NextUIProvider>
  </Provider>
);
