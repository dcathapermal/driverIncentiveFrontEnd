// Import React.js
import React, { useState } from 'react';

// Import CSS
import './DriverOptions.css';

/** 
 *  Allows sponsors to update driver options
**/ 
const DriverOptions = ( props ) => {
    const [ hasConfirmed, setIfConfirmed ] = useState ( false );
    const [ pointChange, setPointChange ] = useState ( 0 );
    
    const addPoints = () => {
        setPointChange ( pointChange + 1 );
    }
    
    const subtractPoints = () => {
        setPointChange ( pointChange - 1 );
    }
    
    const confirmChanges = () => {
        setIfConfirmed ( true );
    }
    
    return (
        <div class='DriverOptions'>
            <div class='pointChanger'>
                <button class='subtractPointsBtn' onClick={ subtractPoints } disabled={ hasConfirmed }>
                    -
                </button>
                <div class='points'>
                    { pointChange }
                </div>
                <button class='addPointsBtn' onClick={ addPoints } disabled={ hasConfirmed }>
                    +
                </button>
            </div>
            
            <br />
            <form>
                <label>Reason For Point Change:</label>
                <br />
                <textarea class='reasonTextArea' disabled={ hasConfirmed } />
            </form>
            
            <br />
            <button class='confirmBtn' onClick={ confirmChanges }>
                Confirm
            </button>
        </div>
    )
}

export default DriverOptions;