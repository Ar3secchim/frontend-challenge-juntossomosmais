import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { DetailsUser } from "./pages/DetailsUser/index.jsx";
import { Footer } from "./components/footer/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DetailsUser />
    <Footer />
  </React.StrictMode>
);
