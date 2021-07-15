import React from 'react';
import { NavLink } from 'react-router-dom';

export const LinksHomeNav = () => {
  return (
    <div className="conteiner-links">

      <NavLink 
          activeClassName="link-navbar-active"
          className="link-navbar" 
          exact
          to="/"
      >
        Inicio
      </NavLink>

      <NavLink 
        activeClassName="link-navbar-active"
        className="link-navbar" 
        exact
        to="/nosotros"
      >
        Nosotros
      </NavLink>

      <NavLink 
        activeClassName="link-navbar-active"
        className="link-navbar" 
        exact
        to="/contacto"
      >
        Contacto
      </NavLink>

    </div>
    )
};
