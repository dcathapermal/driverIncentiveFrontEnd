// Import React.js
import React, { useState } from 'react';

// Import components
import SidebarBtn from './SidebarBtn.js';
import ListElement from './ListElement.js';
import Window from './Window.js';
import DriverOptions from './DriverOptions.js';
import DriverApplicantOptions from './DriverApplicantOptions.js';
import AddSponsor from './AddSponsor.js';

// Import CSS
import './SponsorUsers.css';

/** 
 *  Shows the users of the system
**/ 
const SponsorUsers = () => {
    const tabs = { DRIVERS: 'DRIVERS', DRIVER_APPLICANTS: 'DRIVER_APPLICANTS', SPONSORS: 'SPONSORS' }
    const [ activeTab, setActiveTab ] = useState ( tabs.DRIVERS );
    
    const [ selectedDriver, setSelectedDriver ] = useState ( 0 );
    const [ isDriverOptionsVisible, setIfDriverOptionsVisible ] = useState ( false );
    const [ selectedDriverApplicant, setSelectedDriverApplicant ] = useState ( 0 );
    const [ isDriverApplicantOptionsVisible, setIfDriverApplicantOptionsVisible ] = useState ( false );
    const [ isSponsorOptionsVisible, setIfSponsorOptionsVisible ] = useState ( false );
    
    let driversList = [];
    let driverApplicantsList = [];
    let sponsorsList = [];
    
    const selectDriver = ( driverID ) => {
        setSelectedDriver ( driverID );
        setIfDriverOptionsVisible ( true );
    }
    
    const selectDriverApplicant = ( driverApplicantID ) => {
        setSelectedDriverApplicant ( driverApplicantID );
        setIfDriverApplicantOptionsVisible ( true );
    }
    
    const addSponsor = () => {
        setIfSponsorOptionsVisible ( true );
    }
    
    // Add drivers
    for ( let i = 0; i < 20; i++ ) {
        driversList.push (
            <ListElement
                key={ i }
                text={ 'driver' + i }
                isClickable={ true }
                onClick={ () => selectDriver ( 'driver' + i ) } />
        );
    }
    
    // Add driver applicants
    for ( let i = 0; i < 2; i++ ) {
        driverApplicantsList.push (
            <ListElement
                key={ i }
                text={ 'driverApplicant' + i }
                isClickable={ true }
                onClick={ () => selectDriverApplicant ( 'driverApplicant' + i ) } />
        );
    }
    
    // Add sponsors
    for ( let i = 0; i < 10; i++ ) {
        sponsorsList.push (
            <ListElement
                key={ i }
                text={ 'sponsor' + i }
                isClickable={ false } />
        );
    }
    
    const changeTab = ( tab ) => {
        switch ( tab ) {
            case tabs.DRIVERS:
                setActiveTab ( tabs.DRIVERS );
                break;
            case tabs.DRIVER_APPLICANTS:
                setActiveTab ( tabs.DRIVER_APPLICANTS );
                break;
            case tabs.SPONSORS:
                setActiveTab ( tabs.SPONSORS );
                break;
        }
    }
    
    const hideOptionWindows = () => {
        setIfDriverOptionsVisible ( false );
        setIfDriverApplicantOptionsVisible ( false );
        setIfSponsorOptionsVisible ( false );
    }
    
    return (
        <div class='SponsorUsers'>
            <div class='SponsorUsers_Sidebar'>
                <SidebarBtn
                    text={ 'Drivers' }
                    isActive={ activeTab == tabs.DRIVERS }
                    onClick={ () => changeTab ( tabs.DRIVERS ) } />
                <SidebarBtn
                    text={ 'Driver Applicants' }
                    isActive={ activeTab == tabs.DRIVER_APPLICANTS }
                    onClick={ () => changeTab ( tabs.DRIVER_APPLICANTS ) } />
                <SidebarBtn
                    text={ 'Sponsors' }
                    isActive={ activeTab == tabs.SPONSORS }
                    onClick={ () => changeTab ( tabs.SPONSORS ) } />
            </div>
            <div class='SponsorUsers_Content'>
                { ( activeTab == tabs.DRIVERS ) && driversList }
                
                { ( activeTab == tabs.DRIVER_APPLICANTS ) && driverApplicantsList }
                
                { ( activeTab == tabs.SPONSORS ) &&
                    <button class='addSponsorBtn' onClick={ () => addSponsor () }>
                        Add New Sponsor
                    </button> }
                { ( activeTab == tabs.SPONSORS ) && sponsorsList }
            </div>
            { ( isDriverOptionsVisible == true ) &&
                <Window
                    title={ selectedDriver.toString () }
                    content={ <DriverOptions /> }
                    onExit={ () => hideOptionWindows () } /> }
            { ( isDriverApplicantOptionsVisible == true ) &&
                <Window
                    title={ selectedDriverApplicant.toString () }
                    content={ <DriverApplicantOptions /> }
                    onExit={ () => hideOptionWindows () } /> }
            { ( isSponsorOptionsVisible == true ) &&
                <Window
                    title={ 'Add New Sponsor' }
                    content={ <AddSponsor /> }
                    onExit={ () => hideOptionWindows () } /> }
        </div>
    )
}

export default SponsorUsers;