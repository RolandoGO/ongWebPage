import React from 'react'

export default function NewsWebContent({data}) {

    let dataDisplay;

    if(data){
        dataDisplay=(
            <div>
                <strong>{data.name}</strong>
                //FUNCION PARA PASAR DE TEXT A HTML
            </div>
        )
    }

    return (
        <div>
            Contenido de Novedad
        </div>
    )
}
