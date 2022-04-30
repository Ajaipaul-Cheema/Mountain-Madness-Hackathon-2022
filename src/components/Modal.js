import React from 'react'
import '../styles/components/Modal.css'

const Modal = ({ visibilityFunction }) => {

    return (
        <div className={'modal'}>
            <div className={'modalMain'}>
                <div className={'modalHeader'}>
                    <div>Stock Purchased</div>
                    <div onClick={visibilityFunction}>🗙</div>
                </div>
                <hr />
                <div className={'modalBody'}>
                    Congratulations, you have purchased 1...
                </div>
            </div>
        </div>
    )

}

export default Modal   