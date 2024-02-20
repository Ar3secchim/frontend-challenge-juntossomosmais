import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { DetailsUser } from "./DetailsUser/index.jsx";
import { Header } from "./components/header/index.jsx";
import { Footer } from "./components/footer/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <DetailsUser />
    <Footer />
  </React.StrictMode>
);
