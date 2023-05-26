import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//@material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./Context/AppContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <ThemeProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>

    </ThemeProvider>

  </BrowserRouter>

);
