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
            console.log(el);
            let value = document.querySelector(`#${el}`).getBoundingClientRect();
            return {[el] :Math.ceil(value.height + 1) > Math.ceil(value.top + value.height) && Math.ceil(value.top + value.height) > 0}
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
