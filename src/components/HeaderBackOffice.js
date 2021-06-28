import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

import Logo from '../assets/LOGO-SOMOSMAS.png';
import iconMenu from '../assets/icon-menu.png';
import '../styles/backOfficeStyles.css';

export const HeaderBackOffice = () => {

    const openSidebar = () => {
        console.log('Open Sidebar');
    };

    return (
        <Router>
            <header>
                <nav className="navbar navbar-light navbar-backofice">
                    <div className="container-fluid">
                        <div className="navbar-brand d-flex align-items-center">
                            <img src={Logo} alt="logo" height="60" className="d-inline-block align-text-top" />
                            <button
                                className="btn-sidebar"
                                onClick={openSidebar}
                            >
                                <img src={iconMenu} alt="logo" height="20" className="d-inline-block align-text-top" />
                            </button>
                            <ul className="navbar-nav">
                                <li className="nav-item p-2">
                                    <Link to="/backoffice/news/create" className="nav-link">
                                        Crear una novedad
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </Router>
    )
}
