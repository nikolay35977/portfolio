import React from 'react';
import image from './../Assets/img/share_back.jpg'
import ScrollAnimation from 'react-animate-on-scroll';

const TestimonialsCard = (props) => {
    return (
        <div className={'testimonialsCard'}>
            {props.id}
            <div className={'body'}>
                <div className='title'>
                    Work with John was a pleasure. He understood exactly what I wanted and created an awesome site for
                    my company.
                </div>
                <div className='img'>
                    <img src={image}/>
                </div>
            </div>
            <div className={'footer'}>
                Jane Doe
            </div>
        </div>
    )
}

const TestimonialsPage = (props) => {
    let testimonialsCards = ['1', '2', '3'];
    const [currentCardId, setCurrentCardId] = React.useState(0);
    testimonialsCards = testimonialsCards.map(el => <TestimonialsCard id={el}/>)
    setTimeout(() => {
        setCurrentCardId(currentCardId >= testimonialsCards.length - 1 ? 0 : currentCardId + 1);
    }, 10000)
    return (
        <section id={'testimonials'}>
            <div className={'container'}>
                <ScrollAnimation animateIn='fadeIn'>
                    <div className={'testimonials_header'}>
                        <div className='title'>
                            What my clients say
                        </div>
                        <div className='subtitle'>
                            No one lights a lamp in order to hide it behind the door: the purpose of light is to create
                            more light, to open people’s eyes, to reveal the marvels around.
                        </div>
                    </div>
                </ScrollAnimation>
                <div className={'testimonialsCards'}>
                    {testimonialsCards[currentCardId]}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsPage;