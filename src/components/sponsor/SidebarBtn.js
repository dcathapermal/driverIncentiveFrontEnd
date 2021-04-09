// Import React.js
import React, { useState } from 'react';

// Import CSS
import './SidebarBtn.css';

/** 
 *  Button for sidebar
**/ 
const SidebarBtn = ( props ) => {
    const [ style, setStyle ] = useState ( 'SidebarBtnInactive' );
    
    const mouseOver = () => {
        setStyle ( 'SidebarBtnHover' );
    }
    
    const mouseOut = () => {
        setStyle ( 'SidebarBtnInactive' );
    }
    
    const mouseClick = () => {
        setStyle ( 'SidebarBtnActive' );
        props.onClick ();
    }
    
    return (
        <div class='SidebarBtn' onMouseOver={ mouseOver } onMouseOut={ mouseOut } onClick={ mouseClick }>
            <div class={ ( props.isActive == true ) ? 'SidebarBtnActive' : style }>
                { props.text }
            </div>
        </div>
    )
}

export default SidebarBtn;