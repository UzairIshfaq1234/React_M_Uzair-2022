import React from 'react'

function Aleart(props) {
    return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>TYPE</strong>MESSAGE
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    )
}

export default Aleart
