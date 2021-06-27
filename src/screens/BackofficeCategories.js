import React, { useCallback, useEffect,useState } from 'react'
import {Link} from "react-router-dom"
import {BackofficeCategoriesListTable} from '../components/BackofficeCategoriesListTable'

export default function BackofficeCategories() {

//Mok data waiting for the response of the api endpoint
    const [data, setData]=useState([{name:"contactos", createdAt:"12:36:33",id:1},{name:"planes", createdAt:"12:36:33",id:2},{name:"educacion", createdAt:"12:36:33",id:3},{name:"alimentos", createdAt:"12:36:33",id:4}])
    
    
//the use effect have the call to the endpoint, it needs the correct url.
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

     
     

    const handleDelete=useCallback((categorie)=>deleteCategorie(categorie),[data])

    const handleEdit=useCallback((categorie)=>editCategorie(categorie),[data])

    

    function deleteCategorie(categorie){
        console.log("delete"+ categorie.name)

    }

    function editCategorie(categorie){
        console.log("edit"+ categorie.name)

    }
        

   
   
  return (
        <div>

            {/* <Link to="/backoffice/categorías/create"/> */}
           
            <BackofficeCategoriesListTable data={data} handleEdit={handleEdit} handleDelete={handleDelete}/>

        </div>
    )
}
    
            
 


  