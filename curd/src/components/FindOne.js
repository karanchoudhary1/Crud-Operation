import React, { useState } from 'react'
import './insert.css';
import imk from "../assests/rocket_contact.png"
import Alert from './Alert';
import Card from './Card';


const FindOne = () => {
    const[userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [alert,setAlert]=useState({msg:null,type:null});
    const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
          
        })
        if(type==="danger"){
            setTimeout(() => {
                setAlert({msg:null,type:null});
              },2000);
        }
      }
      async function findUser(e) {
        e.preventDefault();
        const response=await fetch("http://ec2-54-187-83-232.us-west-2.compute.amazonaws.com:9999/api/findOne",{
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
            if(data.response[0]===undefined){
                showAlert("data not found","danger")
            }
            else{ showAlert(data.response[0],"dark");
        }
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
            <form onSubmit={findUser}>
                <h3 style={{color:"#0092af"}}>fill Any one to find detail about user</h3>
                <div className="d-flex flex-row flex-wrap">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="User Name *" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                        </div>
                        <p className='text-danger text-center'>Or</p>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Your Email *" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                        <button type="submit" className="btn btn-info">Find Details</button>
                        </div>
            
                    </div>
                    <div className="">
                     { (typeof alert.msg === 'object' && alert.msg !== null && !Array.isArray(alert.msg))?<Card alert={alert.msg}/>:<Alert alert={alert.msg===null?null:alert}/>} 

                    </div>
                </div>
            </form>
        </div>

    </>
    )
}

export default FindOne
