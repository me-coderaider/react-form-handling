import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BookContext from "./context/books";

const rootEl = document.getElementById("root");

const root = ReactDOM.createRoot(rootEl);

root.render(
    <BookContext.Provider value={5}>
        <App />
    </BookContext.Provider>
);
