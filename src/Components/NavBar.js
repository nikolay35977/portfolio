import React from 'react';

const NavBarItems = (props) => {
    console.log(props.isActive);
    return (
        <span>
            <a href={'#' + props.text} className={'nav_item ' + (props.isActive && 'active')}>
                {props.text}
            </a>
        </span>
    )
}

const NavBar = (props) => {
    let NavList = ['home', 'services', 'works', 'skills', 'testimonials', 'contact'];
    NavList = NavList.map((el, id) => <NavBarItems text={el} isActive={props.navigation.length ? props.navigation[id][el] : null}/>)
    return (
        <nav id={'navbar'}>
            <div className='container'>
                <a className='title' href={'#home'}>
                    Nikolay
                </a>
                <div className='nav_list'>
                    {NavList}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;