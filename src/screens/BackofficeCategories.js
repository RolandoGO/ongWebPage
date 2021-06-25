import React, { useEffect,useState } from 'react'
import {Link} from "react-router-dom"
import Backoffice_CategoriesListTable from '../components/Backoffice_CategoriesListTable'

export default function BackofficeCategories() {

//datos mokeados a la espera de los datos reales del endpoint
    const [data, setData]=useState([{name:"contactos", createdAt:"12:36:33",id:1},{name:"planes", createdAt:"12:36:33",id:2},{name:"educacion", createdAt:"12:36:33",id:3},{name:"alimentos", createdAt:"12:36:33",id:4}])
    
//El use effect contiene el llamado al endpopint, faltaria la url correcta
    useEffect(()=>{

        //     const abortControl= new AbortController()

        //     fetch("https://jsonplaceholder.typicode.com/users",{signal:abortControl.signal})
        //     .then(res=>{
        //         if(!res.ok) throw Error("cant fetch the data for that resource")
        //         return res.json()
        //     })
        //     .then(data=>setData(data))
        //     .catch(err=>alert(err.message))
        
            
        // return ()=> abortControl.abort()


    },[])  

     

    function handleDelete(categorie){
        console.log(categorie)

    }

    function handleEdit(categorie){
        console.log(categorie)
    }
        

    const propsObj={
        handleDelete,
        handleEdit,
        data
    }
   
   
  return (
        <div>

            {/* <Link to="/backoffice/categorías/create"/> */}
            <Backoffice_CategoriesListTable props={propsObj}/>

        </div>
    )
}
    
            
 


  