import React from 'react';
import item from './../Assets/img/item-1.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

const WorkCard = ({text, title}) => {
    return (
        <div className={'work-card'}>
            <img src={item} alt={title}/>
            <div className="title_block">
                <div className="title">The <span>Hui</span></div>
            </div>
            <div className="subtitle_block">
                <div className="subtitle">The Hui</div>
            </div>
        </div>
    )
}

const WorkPage = (props) => {
    return (
        <div id={'works'}>
            <div className='container'>
                <ScrollAnimation animateIn='fadeIn'>
                    <div className={'work_header'}>
                        <div className='title'>
                            my works
                        </div>
                        <div className='subtitle'>
                            No one lights a lamp in order to hide it behind the door: the purpose of light is to create
                            more light, to open people’s eyes, to reveal the marvels around.
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn' duration={5}>
                    <div className={'work_cards'}>
                        <WorkCard/>
                        <WorkCard/>
                        <WorkCard/>
                        <WorkCard/>
                        <WorkCard/>
                        <WorkCard/>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default WorkPage;