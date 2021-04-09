// Import React.js
import React, { useState } from 'react';

// Import components
import SponsorPage from './SponsorPage.js';

// Import CSS
import './SponsorHome.css';

export default function SponsorHome() {
    const pages = { SPONSOR: 'SPONSOR' }
    const [ activePage, setActivePage ] = useState ( pages.SPONSOR );
    
    return (
        <div class='SponsorHome'>
            { ( activePage == pages.SPONSOR ) && <SponsorPage /> }
        </div>
  );
}