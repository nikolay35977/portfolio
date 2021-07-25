import React from "react";
import HomePage from "./Components/HomePage";
import "./Assets/styles/scss/main.scss";
import ServicesPage from "./Components/ServicesPage";

const App = (props) => {
  return (
    <div>
        <HomePage/>
        <ServicesPage/>
    </div>
  );
}

export default App;
