// Import React.js
import React, { useState } from 'react';

// Import CSS
import './AddSponsor.css';

/** 
 *  Allows sponsors to add new sponsor users
**/ 
const AddSponsor = ( props ) => {
    const [ hasCreated, setIfCreated ] = useState ( false );
    const [ message, setMessage ] = useState ( '' );
    
    const createSponsor = () => {
        if ( hasCreated == false ) {
            setMessage ( 'Sponsor Account Created' );
            setIfCreated ( true );
        }
    }
    
    return (
        <div class='AddSponsor'>
            <form>
                <label>Username:</label>
                <br />
                <input type='text' disabled={ hasCreated }/>
                
                <br />
                <br />
                <label>Password:</label>
                <br />
                <input type='text' disabled={ hasCreated }/>
            </form>
            
            <br />
            <br />
            <button onClick={ createSponsor }>
                Create Sponsor Account
            </button>
            
            <br />
            <br />
            { message }
        </div>
    )
}

export default AddSponsor;