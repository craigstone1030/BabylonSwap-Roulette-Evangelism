import React from 'react'

function UnderService({active}) {
    return (
        <div className={active?'d-flex justify-content-center align-items-center ml-5 ptb':'d-flex justify-content-center align-items-center ptb'}>
            <h2>Website under service...</h2>
        </div>
    )
}
export default UnderService