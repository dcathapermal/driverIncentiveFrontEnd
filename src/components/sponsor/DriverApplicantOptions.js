// Import React.js
import React, { useState } from 'react';

// Import CSS
import './DriverApplicantOptions.css';

/** 
 *  Allows sponsors to accept or reject driver applicants
**/ 
const DriverApplicantOptions = ( props ) => {
    const [ hasChosen, setIfChosen ] = useState ( false );
    const [ message, setMessage ] = useState ( '' );
    
    const acceptDriver = () => {
        if ( hasChosen == false ) {
            setMessage ( 'Driver Accepted' );
            setIfChosen ( true );
        }
    }
    
    const declineDriver = () => {
        if ( hasChosen == false ) {
            setMessage ( 'Driver Declined' );
            setIfChosen ( true );
        }
    }
    
    return (
        <div class='DriverApplicantOptions'>
            <button class='applicatBtn' onClick={ acceptDriver }>
                Accept Driver
            </button>
            <button class='applicatBtn' onClick={ declineDriver }>
                Decline Driver
            </button>
            <div class='applicantMessage'>
                { message }
            </div>
        </div>
    )
}

export default DriverApplicantOptions;