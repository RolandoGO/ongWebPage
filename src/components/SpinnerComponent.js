import React from 'react'

export default function SpinnerComponent({loading}) {
    //El loading es un boolean, true para que aparezca y false para desaparecer
    
    return (
        <div>
            {loading?<div className="spinner-border text-primary" style={{height:"80px",width:"80px"}} role="status"></div>:null}
        </div>
    )
}