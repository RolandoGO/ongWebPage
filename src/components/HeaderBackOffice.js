import React from 'react';

import Logo from '../assets/LOGO-SOMOSMAS.png';
import iconMenu from '../assets/icon-menu.png';
import '../styles/backOfficeStyles.css';

export const HeaderBackOffice = () => {

    const openSidebar = () => {
        console.log('Open Sidebar');
      };

    return (
        <header>
            <nav className="navbar navbar-light navbar-backofice">
                <div className="container-fluid">
                    <div className="navbar-brand d-flex">
                        <img src={Logo} alt="logo" height="60" className="d-inline-block align-text-top" />
                        <button 
                            className="btn-sidebar"
                            onClick={openSidebar}
                        > 
                        <img src={iconMenu} alt="logo" height="20" className="d-inline-block align-text-top" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
