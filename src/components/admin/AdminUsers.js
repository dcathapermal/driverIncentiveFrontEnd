// Import React.js
import React, { useState } from 'react';

// Import components
import SidebarBtn from './SidebarBtn.js';
import ListElement from './ListElement.js';

// Import CSS
import './AdminUsers.css';

/** 
 *  Shows the users of the system
**/ 
const AdminUsers = () => {
    const tabs = { DRIVERS: 'DRIVERS', SPONSORS: 'SPONSORS', ADMINS: 'ADMINS' }
    const [ activeTab, setActiveTab ] = useState ( tabs.DRIVERS );
    
    var driversList = [];
    var sponsorsList = [];
    var adminsList = [];
    
    // Add drivers
    for ( var i = 0; i < 20; i++ ) {
        driversList.push (
            <ListElement text={ 'driver' + i } />
        );
    }
    
    // Add sponsors
    for ( var i = 0; i < 10; i++ ) {
        sponsorsList.push (
            <ListElement text={ 'sponsor' + i } />
        );
    }
    
    // Add admins
    for ( var i = 0; i < 5; i++ ) {
        adminsList.push (
            <ListElement text={ 'admin' + i } />
        );
    }
    
    const changeTab = ( tab ) => {
        switch ( tab ) {
            case tabs.DRIVERS:
                setActiveTab ( tabs.DRIVERS );
                break;
            case tabs.SPONSORS:
                setActiveTab ( tabs.SPONSORS );
                break;
            case tabs.ADMINS:
                setActiveTab ( tabs.ADMINS );
                break;
        }
    }
    
    return (
        <div class='AdminUsers'>
            <div class='AdminUsers_Sidebar'>
                <SidebarBtn
                    text={ 'Drivers' }
                    isActive={ activeTab == tabs.DRIVERS }
                    onClick={ () => changeTab ( tabs.DRIVERS ) } />
                <SidebarBtn
                    text={ 'Sponsors' }
                    isActive={ activeTab == tabs.SPONSORS }
                    onClick={ () => changeTab ( tabs.SPONSORS ) } />
                <SidebarBtn
                    text={ 'Admins' }
                    isActive={ activeTab == tabs.ADMINS }
                    onClick={ () => changeTab ( tabs.ADMINS ) } />
            </div>
            <div class='AdminUsers_Content'>
                { ( activeTab == tabs.DRIVERS ) && driversList }
                { ( activeTab == tabs.SPONSORS ) && sponsorsList }
                { ( activeTab == tabs.ADMINS ) && adminsList }
            </div>
        </div>
    )
}

export default AdminUsers;