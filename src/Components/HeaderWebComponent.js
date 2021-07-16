import React, {useEffect, useState} from 'react'
import logo from "../assets/LOGO-SOMOSMAS.png"
import {Link} from "react-router-dom"
import "../styles/headerWebStyles.css"

export default function HeaderWebComponent() {


    const data = ["home", "dashboard","contactos", "como","porque","brisa","caca", "pedo"]
    const [linksArray,setLinksArray] = useState([])
    const [btnDisable, setBtnDisable]= useState(false)

    useEffect(()=>{

        let aux;
        if(true){
            aux = data.map(d=>{
                return(

                    <div>
                        <Link to="/">{d}</Link>
                    </div>

                )
            })
        }

        setLinksArray(aux)
    },[data])

    return (
        <header className="row">
            <div className=" my-card col-md-2">
                <img src={logo}></img>
            </div>
            <div className=" my-card col-md-8 d-flex flex-colunm">
                <nav>
                    {linksArray}
                </nav>
            </div>
            <div  className=" my-card col-md-2">
                
                <button disabled={btnDisable}>LogIn</button>
                
            </div>
            
                
            
        </header>
    )
}
