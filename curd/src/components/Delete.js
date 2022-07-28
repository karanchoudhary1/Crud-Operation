import React, { useState } from 'react'
import './insert.css';
import imk from "../assests/rocket_contact.png"
import Alert from './Alert';

const Delete = () => {
    const[userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [alert,setAlert]=useState(null);
    const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        },2000);
      }
      async function deleteUser(e) {
        e.preventDefault();
        const response=await fetch("http://ec2-54-187-83-232.us-west-2.compute.amazonaws.com:9999/api/delete",{
        headers:{
          'Content-Type':'application/json',
             'Access-Control-Allow-Origin':"*"
        },  
        body: JSON.stringify({
            userName,
            email
          }),
        method:"POST"
        })
        const data=await response.json();
        if(data.status==="ok"){
          showAlert("Deleting Successfull","success");
          setTimeout(() => {
            window.location.href="/delete"
          },2000);
        }
        else{
          showAlert(data.error,"danger");
        }
        console.log(data)
        console.log(alert)
    
      }
    return (
        <>
        <div className="container contact-form">
            <div className="contact-image">
                <img src={imk} alt="rocket_contact" />
            </div>
            <form onSubmit={deleteUser}>
                <h3 className='text-danger'>Delete</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="User Name *" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                        </div>
                        <p className='text-danger text-center'>Or</p>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Your Email *" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                        <button type="submit" className="btn btn-danger">Delete</button>
                        </div>
            
                    </div>
                </div>
            </form>
        </div>
<Alert alert={alert}/>

    </>
    )
}

export default Delete
