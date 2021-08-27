import React from 'react';
import Another from './Elements/Another';
import Best from './Elements/Best';
import Library from './Elements/Library';
import Main from './Elements/Main';
import Catalog from './Elements/Catalog';
import Footer from './Elements/Footer';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <Main />
            <Library />
            <Best />
            <Catalog />
            <Another />
            <Footer />
        </div>
    );
};

export default Sidebar;