import React from 'react';

const NavBarItems = (props) => {
    return (
        <span>
            <a href={'#' + props.text} className={"nav_item"}>
                {props.text}
            </a>
        </span>
    )
}

const NavBar = (props) => {
    let NavList = ['home', 'services', 'works', 'skills', 'testimonials', 'contact'];
    NavList = NavList.map(el => <NavBarItems text={el}/>)
    return (
        <nav id={'navbar'}>
            <div className="container">
                <div className="title">
                    Nikolay
                </div>
                <div className="nav_list">
                    {NavList}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;