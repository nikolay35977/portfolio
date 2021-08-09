import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SharePage = (props) => {
    return (
        <section id={'share'}>
            <div className={'container'}>
                <ScrollAnimation animateIn='bounceInRight' duration={2}>
                    <div className={'title'}>
                        ARE YOU READY TO START?
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' duration={4}>
                    <div className={'subtitle'}>
                        I'm available for freelance projects.
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInRight' duration={6}>
                    <a href={'#contact'} className={'btn'}>
                        hire me
                    </a>
                </ScrollAnimation>
            </div>
        </section>
    )
}

export default SharePage;