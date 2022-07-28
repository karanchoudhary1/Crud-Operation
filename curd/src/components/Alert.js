import React from 'react'

const Alert = (props) => {
  return (
  props.alert &&<div className="top d-flex justify-content-center" style={{position:"absolute",top:"5px",zIndex:"100000",marginLeft:"auto",marginRight:"auto",left:"0",right:"0"}}>
  <div className={`alert alert-${props.alert.type}`} role="alert" style={{ boxShadow: "0px 0px 5px black"}}>
  <strong>{props.alert.msg}</strong>
</div>
</div> 
  )
}

export default Alert