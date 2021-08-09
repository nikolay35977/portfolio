import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SkillCard = (props) => {
    return (
        <div className={'skill_card'}>
            <div className={'percent'}>
                21
            </div>
            <div className={'text'}>
                PROGRAMMING
            </div>
        </div>
    )
}

const SkillPage = (props) => {
    return (
        <section id='skills'>
            <div className={'container'}>
                <ScrollAnimation animateIn='fadeIn'>
                    <div className={'skill_header'}>
                        <div className='title'>
                            my skills
                        </div>
                        <div className='subtitle'>
                            No one lights a lamp in order to hide it behind the door: the purpose of light is to create
                            more light, to open people’s eyes, to reveal the marvels around.
                        </div>
                    </div>
                </ScrollAnimation>
                <div className={'skill_cards'}>
                    <SkillCard/>
                </div>
            </div>
        </section>
    )
}

export default SkillPage;