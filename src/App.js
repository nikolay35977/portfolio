import React from "react";
import HomePage from "./Components/HomePage";
import "./Assets/styles/scss/main.scss";
import ServicesPage from "./Components/ServicesPage";
import WorkPage from "./Components/WorkPage";

const App = (props) => {
  return (
    <div>
        <HomePage/>
        <ServicesPage/>
        <WorkPage/>
    </div>
  );
}

export default App;
