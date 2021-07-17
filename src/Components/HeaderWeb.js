import React, {useState, useEffect} from 'react'
import logo from "../assets/LOGO-SOMOSMAS.png"
import {NavLink} from "react-router-dom"
import "../styles/headerWebStyles.css"


const NAV_LINKS=[
    {
        name:"Home",
        path:"/home"
    },
    {
        name:"Nosotros",
        path:"/nosotros"
    },
    {
        name:"Contacto",
        path:"/contacto"
    },

]
export default function HeaderWeb({isLogIn}) {


    
    const [loginBtn, setLoginBtn]= useState("")

    const linksArray= NAV_LINKS.map(link=>{
        return(
            
            <div>
                <NavLink
                    activeClassName="link-navbar-active"
                    className="link-navbar"
                    exact
                    to={link.path}
                >
                    {link.name}
                </NavLink>
            </div>

            )
        })

    useEffect(()=>{
        let btn;
        if(isLogIn===false) btn=<button>Log In</button>
        setLoginBtn(btn)
    },[isLogIn])       
        

    
    return (
        <header className="row justify-content-center">

            <div className="col-2 my-logo">
                <img src={logo}></img>
            </div>

            <div className="col-md-7 mt-3 d-flex flex-row justify-content-between shadow p-3 mb-5 bg-white rounded">
                {linksArray}
            </div>
            <div className="col-1">
                {loginBtn}
            </div>

   
        </header>
    )
}
 
  
            
 