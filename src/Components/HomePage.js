import React from 'react';
import {Arrow_svg} from "../Common/svg";

const HomePage = () => {
    return (
        <div id={'home'}>
            <div className='home-overlay'>
                <div className='container'>
                    <div className='describe'>
                        Hello, my name is Sychev Nikolay and I am
                    </div>
                    <div className='title'>
                        Frontend Web Developer
                    </div>
                    <div className='describe'>
                        creating modern and responsive Web Application
                    </div>
                </div>
                <a className='animation' href={'#services'}>
                    <span className='arrow_container'>
                        <Arrow_svg width={'20px'} height={'20px'}/>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default HomePage;