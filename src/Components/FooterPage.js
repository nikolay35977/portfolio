import React from 'react'
import {EmailIcon_svg, FacebookIcon_svg, TwitterIcon_svg, VkIcon_svg} from "../Common/svg";

const Social = ({type}) => {
    const width = 20,
        height = 20;
    switch (type) {
        case 'facebook':
            return (
                <a className={'social'} href={'asd'}>
                    <FacebookIcon_svg width={width} height={height}/>
                </a>
            );
        case 'twitter':
            return (
                <a className={'social'} href={'asd'}>
                    <TwitterIcon_svg width={width} height={height}/>
                </a>
            );
        case 'vk':
            return (
                <a className={'social'} href={'asd'}>
                    <VkIcon_svg width={width} height={height}/>
                </a>
            );

        case 'email':
            return (
                <a className={'social'} href={'asd'}>
                    <EmailIcon_svg width={width} height={height}/>
                </a>
            );


    }
}

const FooterPage = (props) => {
    let socialIcons = ['facebook', 'twitter', 'vk', 'email'];
    socialIcons = socialIcons.map(el => <Social type={el}/>)
    return (
        <footer id={'footer'}>
            <div className={'container'}>
                <div className='social-links'>
                    {socialIcons}
                </div>
                <div className='copyright'>
                    © 2021 <span>Nikolay Sychev</span>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage;