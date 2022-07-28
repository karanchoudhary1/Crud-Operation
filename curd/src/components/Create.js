import React, { useState } from 'react'
import './insert.css';
import imk from "../assests/rocket_contact.png"
import Alert from './Alert';

const Create = () => {
    const[name,setName]=useState('');
    const[userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [phonenumber,setPhonenumber]=useState('');
    const [password,setPassword]=useState('');
    const [con_password,setCon_password]=useState('');
    const [collegeName,setCollegeName]=useState('');
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
      async function createUser(e) {
        e.preventDefault();
        const response=await fetch("http://ec2-54-187-83-232.us-west-2.compute.amazonaws.com:9999/api/insert",{
        headers:{
          'Content-Type':'application/json',
           'Access-Control-Allow-Origin':"*"
        },  
        body: JSON.stringify({
            userName,
            name,
            email,
            phonenumber,
            password,
            con_password,
            collegeName
          }),
        method:"POST"
        })
        const data=await response.json();
        if(data.status==="ok"){
          showAlert("Insertion Successful","success");
          setTimeout(() => {
            window.location.href="/insert"
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
            <form onSubmit={createUser}>
                <h3 className='text-success'>Fill Your Details</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="User Name *" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="txtEmail" className="form-control" placeholder="Your Email *"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="number" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="password" name="txtPhone" className="form-control" placeholder="Password *" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div> <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirm Password *" value={con_password} onChange={(e)=>setCon_password(e.target.value)}/>
                        </div> <div className="form-group">
                            <input type="text"  className="form-control" placeholder="College Name *" value={collegeName} onChange={(e)=>setCollegeName(e.target.value)} />
                        </div> 
                        <div className="form-group">
                        <button type="submit" className="btn btn-success">Create</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
<Alert alert={alert}/>

    </>
    )
}

export default Create
