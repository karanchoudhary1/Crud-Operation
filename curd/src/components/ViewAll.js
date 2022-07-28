import React, { useState } from 'react'
import './insert.css';
import imk from "../assests/rocket_contact.png"
// import Alert from './Alert';
import Card from './Card';

const ViewAll = () => {
    const [alert,setAlert]=useState({msg:[],type:""});
    const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
      }
      async function findUser(e) {
        e.preventDefault();
        const response=await fetch("http://ec2-54-187-83-232.us-west-2.compute.amazonaws.com:9999/api/view",{
        headers:{
          'Content-Type':'application/json',
             'Access-Control-Allow-Origin':"*"
        },  
        body: JSON.stringify({
          }),
        method:"POST"
        })
        const data=await response.json();
        if(data.status==="ok"){
          showAlert(data.response,"dark");
        }
        else{
          showAlert(data.error,"danger");
        }
        console.log(data.response)
        console.log(alert)
    
      }
    return (
        <>
        <div className="container contact-form">
            <div className="contact-image">
                <img src={imk} alt="rocket_contact" />
            </div>
            <form onSubmit={findUser}>
                <h3 className='text-secondary'>All details about user</h3>
                <div className="form-group">
                <button type="submit" className="btn btn-warning">ViewAll Data</button>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    {alert.msg.map((element,index) => (
            <div className='d-inline-flex pe-3' key={index}>
               <Card alert={element}/>
            </div>
          ))}
                </div>
            </form>
        </div>

    </>
    )
}

export default ViewAll
