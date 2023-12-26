import React from "react";
import ReactDOM from "react-dom/client";
import { BuscadorPeliculas } from "./components/BuscadorPeliculas";
import "./style/styles.css";
import { BrowserRouter } from "react-router-dom";
import { CarritoApp } from "./CarritoApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoApp />
      <BuscadorPeliculas />
    </React.StrictMode>
  </BrowserRouter>
);
