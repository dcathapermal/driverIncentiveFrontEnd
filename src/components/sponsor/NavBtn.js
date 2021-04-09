// Import React.js
import React, { useState } from 'react';

// Import CSS
import './NavBtn.css';

/** 
 *  Button for navigation bar
**/ 
const NavBtn = ( props ) => {
    const [ barStyle, setBarStyle ] = useState ( 'NavBtnBarInactive' );
    
    const mouseOver = () => {
        setBarStyle ( 'NavBtnBarHover' );
    }
    
    const mouseOut = () => {
        setBarStyle ( 'NavBtnBarInactive' );
    }
    
    const mouseClick = () => {
        setBarStyle ( 'NavBtnBarActive' );
        props.onClick ();
    }
    
    return (
        <div class='NavBtn' onMouseOver={ mouseOver } onMouseOut={ mouseOut } onClick={ mouseClick }>
            <div class='NavBtnContent'>{ props.text }</div>
            <div class={ ( props.isActive == true ) ? 'NavBtnBarActive' : barStyle } />
        </div>
    )
}

export default NavBtn;