import React from 'react'

const Card = (props) => {
  return (
 <div className="card text-dark bg-light mb-3" style={{width: "18rem",borderRadius:"5px"}}>
    <div className="card-header text-center">Details</div>
    <div className="card-body">
      <p className="card-text">User Name: {props.alert.userName}</p>
      <p className="card-text">Name: {props.alert.name}</p>
      <p className="card-text">Email: {props.alert.email}</p>
      <p className="card-text">Mobile No.: {props.alert.phonenumber}</p>
      <p className="card-text">College Name: {props.alert.collegeName}</p>
      <p className="card-text">Password: {props.alert.password}</p>
    </div>
  </div>
  )
}

export default Card