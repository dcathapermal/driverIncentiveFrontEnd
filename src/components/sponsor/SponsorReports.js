// Import React.js
import React, { useState } from 'react';

// Import components
import SidebarBtn from './SidebarBtn.js';
import ReportDriverPointTracking from './ReportDriverPointTracking.js';

// Import CSS
import './SponsorReports.css';

/** 
 *  Generates reports
**/ 
const SponsorReports = () => {
    const tabs = { DRIVER_POINT_TRACKING: 'DRIVER_POINT_TRACKING' }
    const [ activeTab, setActiveTab ] = useState ( tabs.DRIVER_POINT_TRACKING );
    
    const changeTab = ( tab ) => {
        switch ( tab ) {
            case tabs.DRIVER_POINT_TRACKING:
                setActiveTab ( tabs.DRIVER_POINT_TRACKING );
                break;
        }
    }
    
    return (
        <div class='SponsorReports'>
            <div class='SponsorReports_Sidebar'>
                <SidebarBtn
                    text={ 'Driver Point Tracking' }
                    isActive={ activeTab == tabs.DRIVER_POINT_TRACKING }
                    onClick={ () => changeTab ( tabs.DRIVER_POINT_TRACKING ) } />
            </div>
            <div class='SponsorReports_Content'>
                <ReportDriverPointTracking />
            </div>
        </div>
    )
}

export default SponsorReports;