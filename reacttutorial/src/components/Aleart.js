import React from 'react'

function Aleart(props) {
    return (
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mt-3`}role="alert">
                <strong>{props.alert.message} </strong> 
            </div>
    )
}

export default Aleart
