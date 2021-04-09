// Import React.js
import React, { useState } from 'react';

// Import CSS
import './ListElement.css';

/** 
 *  Single item in list
**/ 
const ListElement = ( props ) => {
    const [ style, setStyle ] = useState ( 'ListElementInactive' );
    
    const mouseOver = () => {
        if ( props.isClickable == true ) {
            setStyle ( 'ListElementActive' );
        }
    }
    
    const mouseOut = () => {
        if ( props.isClickable == true ) {
            setStyle ( 'ListElementInactive' );
        }
    }
    
    const mouseClick = () => {
        if ( props.isClickable == true ) {
            props.onClick ();
        }
    }
    
    return (
        <div class='ListElement' onMouseOver={ mouseOver } onMouseOut={ mouseOut } onClick={ mouseClick }>
            <div class={ style }>{ props.text }</div>
        </div>
    )
}

export default ListElement;