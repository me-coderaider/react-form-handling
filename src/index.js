import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import BooksContext from "./context/books";
import { Provider } from "./context/books";

const rootEl = document.getElementById("root");

const root = ReactDOM.createRoot(rootEl);

root.render(
    <Provider>
        <App />
    </Provider>

    // <BooksContext.Provider value={9}>
    //     <App />
    // </BooksContext.Provider>
);
