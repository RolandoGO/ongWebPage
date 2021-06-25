import React, { useState } from "react";
import BackofficeSidebar from "./BackofficeSidebar";
import Logo from "../assets/LOGO-SOMOSMAS.png";
import iconMenu from "../assets/icon-menu.png";
import "../styles/backOfficeStyles.css";

export const HeaderBackOffice = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <BackofficeSidebar show={show} handleClose={handleClose} />
      <nav className="navbar navbar-light navbar-backofice">
        <div className="container-fluid">
          <div className="navbar-brand d-flex">
            <img
              src={Logo}
              alt="logo"
              height="60"
              className="d-inline-block align-text-top"
            />
            <button className="btn-sidebar" onClick={handleShow}>
              <img
                src={iconMenu}
                alt="logo"
                height="20"
                className="d-inline-block align-text-top"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
