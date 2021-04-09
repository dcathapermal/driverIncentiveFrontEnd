// Import React.js
import React, { useState } from 'react';

// Import CSS
import './Window.css';

/** 
 *  Window for extra content
**/ 
const Window = ( props ) => {
    const [ exitBtnStyle, setExitBtnStyle ] = useState ( 'WindowExitBtn' );
    
    const mouseOverExitBtn = () => {
        setExitBtnStyle ( 'WindowExitBtnHover' );
    }
    
    const mouseOutExitBtn = () => {
        setExitBtnStyle ( 'WindowExitBtn' );
    }
    
    const windowExit = () => {
        props.onExit ();
    }
    
    return (
        <div class='Window'>
            <div class='WindowBackdrop' onClick={ windowExit } />
            <div class='WindowPane'>
                <div class='WindowHeader'>
                    <div class={ exitBtnStyle }
                        onMouseOver={ mouseOverExitBtn }
                        onMouseOut={ mouseOutExitBtn }
                        onClick={ windowExit }>
                        X
                    </div>
                </div>
                <div class='WindowContent'>
                    <div class='content'>
                        <div class='WindowTitle'>
                            { props.title }
                            <hr />
                        </div>
                        { props.content }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Window;