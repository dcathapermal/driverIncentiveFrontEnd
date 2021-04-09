// Import React.js
import React, { useState } from 'react';

// Import components
import AdminPage from './AdminPage.js';

// Import CSS
import './AdminHome.css';

export default function Home() {
    const pages = { ADMIN: 'ADMIN' }
    const [ activePage, setActivePage ] = useState ( pages.ADMIN );
    
    return (
        <div class='AdminHome'>
            { ( activePage == pages.ADMIN ) && <AdminPage /> }
        </div>
  );
}