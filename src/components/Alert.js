import React, { useEffect } from 'react'
import '../styles/components/Alert.css'


const Alert = ({ text, destroyFunction }) => {

    useEffect(() => {
        setTimeout(() => destroyFunction(), 10000)
    }, [])

    return (
        <div className={'alertContainer'}>
            <div className={'alert'}>
                <div className={'text'}>{text}</div>
                <div onClick={destroyFunction}>🗙</div>
            </div>
        </div>
    )

}


export default Alert   