// Import React.js
import React, { useState } from 'react';

// Import components
import SidebarBtn from './SidebarBtn.js';

// Import CSS
import './SponsorAdministration.css';

/** 
 *  Settings available to sponsors
**/ 
const SponsorAdministration = () => {
    const tabs = { GENERAL: 'GENERAL', CATALOG: 'CATALOG' }
    const [ activeTab, setActiveTab ] = useState ( tabs.GENERAL );
    
    const changeTab = ( tab ) => {
        switch ( tab ) {
            case tabs.GENERAL:
                setActiveTab ( tabs.GENERAL );
                break;
            case tabs.CATALOG:
                setActiveTab ( tabs.CATALOG );
                break;
        }
    }
    
    return (
        <div class='SponsorAdministration'>
            <div class='SponsorAdministration_Sidebar'>
                <SidebarBtn
                    text={ 'General' }
                    isActive={ activeTab == tabs.GENERAL }
                    onClick={ () => changeTab ( tabs.GENERAL ) } />
                <SidebarBtn
                    text={ 'Catalog' }
                    isActive={ activeTab == tabs.CATALOG }
                    onClick={ () => changeTab ( tabs.CATALOG ) } />
            </div>
            <div class='SponsorAdministration_Content'>
                
            </div>
        </div>
    )
}

export default SponsorAdministration;