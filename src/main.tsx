import React from "react";
import ReactDOM from "react-dom/client";
import { BuscadorPeliculas } from "./components/BuscadorPeliculas";
import "./style/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BuscadorPeliculas />
  </React.StrictMode>
);
