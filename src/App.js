import React from "react";
import HomePage from "./Components/HomePage";
import "./Assets/styles/scss/main.scss";
import ServicesPage from "./Components/ServicesPage";
import WorkPage from "./Components/WorkPage";
import SkillPage from "./Components/SkillPage";
import SharePage from "./Components/SharePage";
import TestimonialsPage from "./Components/TestimonialsPage";

const App = (props) => {
  return (
    <div>
        <HomePage/>
        <ServicesPage/>
        <WorkPage/>
        <SkillPage/>
        <SharePage/>
        <TestimonialsPage/>
    </div>
  );    
}

export default App;
