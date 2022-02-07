import React from "react";
import ReactDOM from "react-dom";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { theme } from "theme";
import reportWebVitals from "./reportWebVitals";
import { App } from "./App";

import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
