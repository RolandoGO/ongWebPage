import React, {useState, useEffect} from 'react'
import logo from "../assets/LOGO-SOMOSMAS.png"
import {NavLink} from "react-router-dom"
import "../styles/headerWebStyles.css"


const NAV_LINKS=[
    {
        name:"Home",
        path:"/"
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
            
            <div className="col-md-2 mt-4">
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
        if(isLogIn===false) btn=<div className="col-md-2 mt-3"><button>Log In</button></div>
        setLoginBtn(btn)
    },[isLogIn])       
        

    
    return (
        <header className="row shadow p-3 mb-5 bg-white rounded d-flex justify-content-center">

            <div className="col-md-4 my-logo">
                <img src={logo}></img>
            </div>

            
                {linksArray}
                {loginBtn}
        </header>
    )
}
     
            
                
           

   
  
  
            
 