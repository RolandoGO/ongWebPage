import React from 'react'

export const SpinnerComponent = React.memo(({ loading }) => {

    //The component respons to a boolean prop, if true render loading animation, else not render.

    if (loading) {
        return <div className="spinner-border text-primary" style={{ height: "80px", width: "80px" }} role="status"></div>
    }
    else return null

})
