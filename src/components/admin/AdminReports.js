// Import React.js
import React, { useState } from 'react';

// Import components
import SidebarBtn from './SidebarBtn.js';

// Import CSS
import './AdminReports.css';

/** 
 *  Generates reports
**/ 
const AdminReports = () => {
    const tabs = { SALES_BY_SPONSOR: 'SALES_BY_SPONSOR',
                   SALES_BY_DRIVER: 'SALES_BY_DRIVER',
                   INVOICES: 'INVOICES',
                   AUDIT_LOGS: 'AUDIT_LOGS' }
    const [ activeTab, setActiveTab ] = useState ( tabs.SALES_BY_SPONSOR );
    
    const changeTab = ( tab ) => {
        switch ( tab ) {
            case tabs.SALES_BY_SPONSOR:
                setActiveTab ( tabs.SALES_BY_SPONSOR );
                break;
            case tabs.SALES_BY_DRIVER:
                setActiveTab ( tabs.SALES_BY_DRIVER );
                break;
            case tabs.INVOICES:
                setActiveTab ( tabs.INVOICES );
                break;
            case tabs.AUDIT_LOGS:
                setActiveTab ( tabs.AUDIT_LOGS );
                break;
        }
    }
    
    return (
        <div class='AdminReports'>
            <div class='AdminReports_Sidebar'>
                <SidebarBtn
                    text={ 'Sales by Sponsor' }
                    isActive={ activeTab == tabs.SALES_BY_SPONSOR }
                    onClick={ () => changeTab ( tabs.SALES_BY_SPONSOR ) } />
                <SidebarBtn
                    text={ 'Sales by Driver' }
                    isActive={ activeTab == tabs.SALES_BY_DRIVER }
                    onClick={ () => changeTab ( tabs.SALES_BY_DRIVER ) } />
                <SidebarBtn
                    text={ 'Invoices' }
                    isActive={ activeTab == tabs.INVOICES }
                    onClick={ () => changeTab ( tabs.INVOICES ) } />
                <SidebarBtn
                    text={ 'Audit Logs' }
                    isActive={ activeTab == tabs.AUDIT_LOGS }
                    onClick={ () => changeTab ( tabs.AUDIT_LOGS ) } />
            </div>
            <div class='AdminReports_Content'>
                
            </div>
        </div>
    )
}

export default AdminReports;