// Import React.js
import React, { useState } from 'react';

// Import CSS
import './ReportInvoices.css';

/** 
 *  Generates invoice reports
**/ 
const ReportInvoices = () => {
    const [ canSelectSponsors, setIfCanSelectSponsors ] = useState ( false );
    const [ canSelectDate, setIfCanSelectDate ] = useState ( false );
    const [ report, setReport ] = useState ( '' );
    
    let sponsorArray = [];
    
    // Add sponsors the user can select
    for ( let i = 0; i < 100; i++ ) {
        sponsorArray.push ( <option > { 'sponsor' + i } </option> );
    }
    
    const allSponsorClick = () => {
        setIfCanSelectSponsors ( false );
    }
    
    const selectSponsorClick = () => {
        setIfCanSelectSponsors ( true );
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
        <div class='ReportInvoices'>
            <div class='ReportInput'>
                <form>
                    <label>Make Report For:</label>
                    <br />
                    <input
                        type='radio'
                        id='allSponsors'
                        name='users'
                        checked={ !canSelectSponsors }
                        onClick={ allSponsorClick } />
                    <label for='allSponsors'>All Sponsors</label>
                    <br />
                    <input
                        type='radio'
                        id='selectSponsor'
                        name='users'
                        checkeed={ canSelectSponsors }
                        onClick={ selectSponsorClick } />
                    <select id='sponsorSelection' for='selectSponsor' disabled={ !canSelectSponsors }>
                        <option>Select Sponsor</option>
                        { sponsorArray }
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

export default ReportInvoices;