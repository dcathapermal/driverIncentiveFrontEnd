// Import React.js
import React, { useState } from 'react';

// Import CSS
import './ReportSalesByDriver.css';

/** 
 *  Generates sales by driver reports
**/ 
const ReportSalesByDriver = () => {
    const [ canSelectUsers, setIfCanSelectUsers ] = useState ( false );
    const [ canSelectDate, setIfCanSelectDate ] = useState ( false );
    const [ report, setReport ] = useState ( '' );
    
    let userArray = [];
    
    // Add drivers the user can select
    for ( let i = 0; i < 100; i++ ) {
        userArray.push ( <option > { 'driver' + i } </option> );
    }
    
    const allDriverClick = () => {
        setIfCanSelectUsers ( false );
    }
    
    const selectDriverClick = () => {
        setIfCanSelectUsers ( true );
    }
    
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
        <div class='ReportSalesByDriver'>
            <div class='ReportInput'>
                <form>
                    <label>Make Report For:</label>
                    <br />
                    <input
                        type='radio'
                        id='allDrivers'
                        name='users'
                        checked={ !canSelectUsers }
                        onClick={ allDriverClick } />
                    <label for='allDrivers'>All Drivers</label>
                    <br />
                    <input
                        type='radio'
                        id='selectDriver'
                        name='users'
                        checkeed={ canSelectUsers }
                        onClick={ selectDriverClick } />
                    <select id='driverSelection' for='selectDriver' disabled={ !canSelectUsers }>
                        <option>Select Driver</option>
                        { userArray }
                    </select>
                    
                    <br />
                    <br />
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

export default ReportSalesByDriver;