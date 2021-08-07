import React from "react";
import HomePage from "./Components/HomePage";
import "./Assets/styles/scss/main.scss";
import ServicesPage from "./Components/ServicesPage";
import WorkPage from "./Components/WorkPage";
import SkillPage from "./Components/SkillPage";
import SharePage from "./Components/SharePage";
import TestimonialsPage from "./Components/TestimonialsPage";
import ContactPage from "./Components/ContactPage";
import FooterPage from "./Components/FooterPage";

const App = (props) => {
  return (
    <div>
        <HomePage/>
        <ServicesPage/>
        <WorkPage/>
        <SkillPage/>
        <SharePage/>
        <TestimonialsPage/>
        <ContactPage/>
        <FooterPage/>
    </div>
  );    
}

export default App;
