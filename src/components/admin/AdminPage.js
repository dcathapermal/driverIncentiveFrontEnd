// Import React.js
import React, { useState } from 'react';

// Import components
import NavBtn from './NavBtn.js';
import AdminUsers from './AdminUsers.js';
import AdminReports from './AdminReports.js';

// Import CSS
import './AdminPage.css';

/** 
 *  The admin page
**/ 
const AdminPage = () => {
    const contents = { USERS: 'USERS', REPORTS: 'REPORTS' }
    const [ activeContent, setActiveContent ] = useState ( contents.USERS );
    
    const changeContent = ( content ) => {
        switch ( content ) {
            case contents.USERS:
                setActiveContent ( contents.USERS );
                break;
            case contents.REPORTS:
                setActiveContent ( contents.REPORTS );
                break;
        }
    }
    
    return (
        <div class='AdminPage'>
            <div class='AdminPage_Header'>
                
            </div>
            <div class='AdminPage_NavBar'>
                <NavBtn
                    text={ 'Users' }
                    isActive={ activeContent == contents.USERS }
                    onClick={ () => changeContent ( contents.USERS ) } />
                <NavBtn
                    text={ 'Reports' }
                    isActive={ activeContent == contents.REPORTS }
                    onClick={ () => changeContent ( contents.REPORTS ) } />
            </div>
            <div class='AdminPage_Content'>
                { ( activeContent == contents.USERS ) && <AdminUsers /> }
                { ( activeContent == contents.REPORTS ) && <AdminReports /> }
            </div>
        </div>
    )
}

export default AdminPage;