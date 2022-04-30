import React from 'react'
import '../styles/components/Modal.css'

const Modal = ({ visibilityFunction, content, title }) => {

    return (
        <div className={'modal'}>
            <div className={'modalMain'}>
                <div className={'modalHeader'}>
                    <div>{title}</div>
                    <div onClick={visibilityFunction}>🗙</div>
                </div>
                <hr />
                <div className={'modalBody'}>
                    {content}
                </div>
            </div>
        </div>
    )

}

export default Modal   