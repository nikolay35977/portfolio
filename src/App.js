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
    let [navigation, setNavigation] = React.useState([]);
    const handleScroll = () => {
        let dict = ['home', 'services', 'works', 'skills', 'testimonials', 'contact'];
        dict = dict.map(el => {
            let value = document.querySelector(`#${el}`).getBoundingClientRect();
            return {[el] : (Math.floor(value.height) >= Math.floor(value.top + value.height)) && (value.top + value.height > 1)}
        });
        setNavigation(dict);
    };
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <HomePage/>
            <ServicesPage navigation={navigation}/>
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
