import React, {useState, useEffect} from 'react'
import logo from "../assets/LOGO-SOMOSMAS.png"
import {Link} from "react-router-dom"
import "../styles/headerWebStyles.css"

export default function HeaderWeb({isLogIn}) {


    const data = ["home", "dashboard","contactos", "como"]
    const [loginBtn, setLoginBtn]= useState("")

    const linksArray= data.map(d=>{
        return(
            
            <div>
                <Link to="/" className="my-link">{d}</Link>
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

            <div className="col-2">
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
 
  
            
 