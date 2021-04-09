// Import React.js
import React, { useState } from 'react';

// Import components
import NavBtn from './NavBtn.js';
import SponsorUsers from './SponsorUsers.js';
import SponsorReports from './SponsorReports.js';
import SponsorAdministration from './SponsorAdministration.js';

// Import CSS
import './SponsorPage.css';

/** 
 *  The admin page
**/ 
const SponsorPage = () => {
    const contents = { USERS: 'USERS', REPORTS: 'REPORTS', ADMINISTRATION: 'ADMINISTRATION' }
    const [ activeContent, setActiveContent ] = useState ( contents.USERS );
    
    const changeContent = ( content ) => {
        switch ( content ) {
            case contents.USERS:
                setActiveContent ( contents.USERS );
                break;
            case contents.REPORTS:
                setActiveContent ( contents.REPORTS );
                break;
            case contents.ADMINISTRATION:
                setActiveContent ( contents.ADMINISTRATION );
                break;
        }
    }
    
    return (
        <div class='SponsorPage'>
            <div class='SponsorPage_Header'>
                
            </div>
            <div class='SponsorPage_NavBar'>
                <NavBtn
                    text={ 'Users' }
                    isActive={ activeContent == contents.USERS }
                    onClick={ () => changeContent ( contents.USERS ) } />
                <NavBtn
                    text={ 'Reports' }
                    isActive={ activeContent == contents.REPORTS }
                    onClick={ () => changeContent ( contents.REPORTS ) } />
                <NavBtn
                    text={ 'Administration' }
                    isActive={ activeContent == contents.ADMINISTRATION }
                    onClick={ () => changeContent ( contents.ADMINISTRATION ) } />
            </div>
            <div class='SponsorPage_Content'>
                { ( activeContent == contents.USERS ) && <SponsorUsers /> }
                { ( activeContent == contents.REPORTS ) && <SponsorReports /> }
                { ( activeContent == contents.ADMINISTRATION ) && <SponsorAdministration /> }
            </div>
        </div>
    )
}

export default SponsorPage;