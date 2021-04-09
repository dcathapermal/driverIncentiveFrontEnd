// Import React.js
import React, { useState } from 'react';

// Import CSS
import './ReportAuditLog.css';

/** 
 *  Generates audit log reports
**/ 
const ReportAuditLog = () => {
    const [ canSelectDate, setIfCanSelectDate ] = useState ( false );
    const [ report, setReport ] = useState ( '' );
    
    const allDateClick = () => {
        setIfCanSelectDate ( false );
    }
    
    const selectDateClick = () => {
        setIfCanSelectDate ( true );
    }
    
    const generateReport = () => {
        setReport ( 'Report goes here' );
    }
    
    return (
        <div class='ReportAuditLog'>
            <div class='ReportInput'>
                <form>
                    <label>Date Range:</label>
                    <br />
                    <input
                        type='radio'
                        id='allDate'
                        name='date'
                        checked={ !canSelectDate }
                        onClick={ allDateClick } />
                    <label for='allHistory'>All History</label>
                    <br />
                    <input
                        type='radio'
                        id='selectDate'
                        name='date'
                        checkeed={ canSelectDate }
                        onClick={ selectDateClick } />
                    <input type='date' for='selectDate' disabled={ !canSelectDate } />
                    <label for='selectDate'> to </label>
                    <input type='date' for='selectDate' disabled={ !canSelectDate } />
                    
                    <br />
                    <br />
                    <label>Audit Log Category:</label>
                    <br />
                    <select id='reportSelection'>
                        <option>Driver Applications</option>
                        <option>Point Changes</option>
                        <option>Password Changes</option>
                        <option>Login Attampts</option>
                    </select>
                </form>
                
                <br />
                <button onClick={ generateReport }>Generate Report</button>
            </div>
            <div class='ReportOutput'>
                { report }
            </div>
        </div>
    )
}

export default ReportAuditLog;