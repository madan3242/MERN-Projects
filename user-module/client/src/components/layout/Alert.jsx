import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
    let alertInfo = useSelector((state) => {
        return state.alert;
    })
  return (<Fragment>
    { alertInfo.length > 0 ? <>
    {alertInfo.map((alert) => (
        <div 
            key={alert.id}    
            className={`alert alert-${alert.color} alert-dismissible animated slideInDown fixed-middle mx-5`}>
                <button type="button" className="close">
                    <i className="fa fa-times-circle" />
                </button>
                <small>{alert.message}</small>
            </div>
    ))}
    </> : <></>}
  </Fragment>)
}

export default Alert