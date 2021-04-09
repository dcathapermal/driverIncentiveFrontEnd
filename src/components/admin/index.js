// Import React.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Import components
import AdminPage from './AdminPage.js';

// Import CSS
import './index.css';

/** 
 *  The application
**/ 
const App = () => {
    const pages = { ADMIN: 'ADMIN' }
    const [ activePage, setActivePage ] = useState ( pages.ADMIN );
    
    return (
        <div class='App'>
            { ( activePage == pages.ADMIN ) && <AdminPage /> }
        </div>
    )
}

ReactDOM.render ( <App />, document.getElementById ( 'root' ) );