import React, { useEffect, useState } from 'react'

export default function ContactData({data}) {
    
    const [contactData, setContactData]=useState()

    useEffect(()=>{
        let aux;
        if(data){
            aux= data.map(contact=>{
                return(
                        <div key={contact.id} className="col-md-2 bg-light m-1 d-fle flex-column shadow-lg p-3 mb-5 bg-white rounded ">
                            <div><strong>Nombre: </strong><p> {contact.name}</p></div>
                            <div><strong>Email: </strong><p>{contact.email}</p></div>
                            <div><strong>Telefono: </strong><p>{contact.phone}</p></div>
                            <div style={{wordWrap:"break-word"}}><strong>Mensaje: </strong><p>{contact.message}</p></div>
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
        <div>

            <div>
                <h2 className="border-bottom border-dark w-25"> <small className="text-muted">Lista de </small>contactos</h2>

            </div>

            <div className="row container" style={{width:"90%"}}>
                {contactData}
               

               </div>
            
        </div>
    )
}
