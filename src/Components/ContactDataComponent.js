import React, { useEffect, useState } from 'react'

export default function ContactDataComponent({data}) {
    
    const [contactData, setContactData]=useState()

    useEffect(()=>{
        let aux;
        if(data){
            aux= data.map(contact=>{
                return(
                        <div key={contact.id} className="col-md-3 bg-light m-1 d-fle flex-column shadow-lg p-3 mb-5 bg-white rounded">
                            <div><p>Nombre:</p></div>
                            <div><p>Email:</p></div>
                            <div><p>Telefono:</p></div>
                            <div><p>Direccion:</p></div>
                        </div>
                    )
                })
        }
        else{
            aux=( 
                <div  className="col-md-3 bg-light m-1 d-fle flex-column shadow-lg p-3 mb-5 bg-white rounded">
                    <h2>No recursos encontrados</h2>
                </div>
            )
        }
        setContactData(aux)
    },[data])
        
           
        



    return (
        <div className="container border border-dark bg-light">

            <div>
                <h2 className="border-bottom border-dark w-25"> <small className="text-muted">Lista de </small>contactos</h2>

            </div>

            <div className="row container" style={{width:"90%"}}>
                {contactData}
               

               </div>
            
        </div>
    )
}
