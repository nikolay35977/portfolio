import React from 'react';
import NavBar from "./NavBar";
import iconMagic_wand from './../Assets/img/magic-wand.svg';
import iconMedal from './../Assets/img/medal.svg';
import iconPlugin from './../Assets/img/plugin.svg';
import iconQuestion from './../Assets/img/question.svg';
import ScrollAnimation from 'react-animate-on-scroll';

const ServicesCard = ({id, icon, title, text}) => {
    return (
        <div className={'services-card'} key={id}>
            <ScrollAnimation animateIn={id[id.length - 1] > 1 ? 'bounceInRight' : 'bounceInLeft'} duration={3}>
                <div className='image'>
                    <img src={icon} alt={title}/>
                </div>
                <div className='title'>
                    {title}
                </div>
                <div className='text'>
                    {text}
                </div>
            </ScrollAnimation>
        </div>
    )
}

const ServicesPage = (props) => {
    let dataForCards = [{
        icon: iconMagic_wand,
        title: 'Web Design',
        text: 'Good things come to those who wait, but only the things left by those who hustle'
    }, {
        icon: iconPlugin,
        title: 'Web Programming',
        text: 'Good things come to those who wait, but only the things left by those who hustle'
    }, {
        icon: iconMedal,
        title: 'Branding',
        text: 'Good things come to those who wait, but only the things left by those who hustle'
    }, {
        icon: iconQuestion,
        title: 'Consultation',
        text: 'Good things come to those who wait, but only the things left by those who hustle'
    }]
    dataForCards = dataForCards.map((el, id) => <ServicesCard id={el.title + id} {...el}/>)

    return (
        <>
            <NavBar navigation={props.navigation}/>
            <section id={'services'}>
                <div className='container'>
                    <ScrollAnimation animateIn='fadeIn'>
                        <div className={'services_header'}>
                            <div className='title'>
                                this is what i do
                            </div>
                            <div className='subtitle'>
                                No one lights a lamp in order to hide it behind the door: the purpose of light is to
                                create
                                more light, to open people’s eyes, to reveal the marvels around.
                            </div>
                        </div>
                    </ScrollAnimation>
                    <div className='services_body'>
                        {dataForCards}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesPage;