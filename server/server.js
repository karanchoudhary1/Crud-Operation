const express=require('express');
const app=express();
const cors=require("cors")
const mongoose=require("mongoose")
const User=require("./modules/user")

const jwt=require("jsonwebtoken")

app.use(cors());
app.use(express.json())



mongoose.connect('mongodb+srv://AbhiKumar:Abhi1234@cluster0.bzv6l.mongodb.net/projectAccount2?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(()=>console.log("connection successful")).catch((err)=>console.log(err))

app.post('/api/insert',async (req,res)=>{
    const { userName,name,phonenumber,email, password,con_password,collegeName} = req.body
    if(password!==con_password){
        return res.json({status:"error",error:"confirm password is not match"})
    }
    try {
		const response = await User.create({
            userName,
			name,
            email,
            phonenumber,
			password,
            con_password,
            collegeName
		})
		console.log('User created successfully: ', response)
        res.json({ status: 'ok' })
	} catch (error) {
        console.log(error)
        res.json({ status: 'error',error:"Error Occured" })
	}

})

app.post('/api/update',async (req,res)=>{
    const { userName,name,phonenumber,email, password,con_password,collegeName} = req.body
    if(password!==con_password){
        return res.json({status:"error",error:"confirm password is not match"})
    }
    const check= await User.findOne({
        userName
    })
    if(!check){
        return  res.json({status:'error',error:"User Not Found To Update"})
      }
    try {
		const response = await User.updateOne({userName},{
            userName,
			name,
            email,
            phonenumber,
			password,
            con_password,
            collegeName
		})
		console.log('User created successfully: ', response)
        res.json({ status: 'ok' })
	} catch (error) {
        console.log(error)
        res.json({ status: 'error',error:"Error Occured" })
	}

})
app.post('/api/delete',async (req,res)=>{
    const { userName,email} = req.body
    if(userName==="" && email===""){
        return res.json({status:'error',error:"Fill Any One"})
    }
    try {
        if(email===""){
            const response = await User.deleteOne({userName})
            console.log('User created successfully: ', response)
            res.json({ status: 'ok' })
        }
        if(userName===""){
            const response = await User.deleteOne({email})
            console.log('User created successfully: ', response)
            res.json({ status: 'ok' })
        }
	} catch (error) {
        console.log(error)
        res.json({ status: 'error',error:"Error Occured" })
	}

})
app.post('/api/findOne',async (req,res)=>{
    const { userName,email} = req.body
    if(userName==="" && email===""){
        return res.json({status:'error',error:"Fill Any One"})
    }
    try {
        if(email===""){
            const response = await User.find({userName})
            console.log('User created successfully: ', response)
            res.json({status:"ok",response:response})
        }
        else{
            const response = await User.find({email})
            console.log('User created successfully: ', response)
            res.json({status:"ok",response:response})
        }
	} catch (error) {
        console.log(error)
        res.json({ status: 'error',error:"Error Occured" })
	}

})
app.post('/api/view',async (req,res)=>{
    try {
       
            const response = await User.find()
            console.log('User created successfully: ', response)
            res.json({status:"ok",response:response})
	} catch (error) {
        console.log(error)
        res.json({ status: 'error',error:"Error Occured" })
	}

})



app.listen(9999,()=>{
    console.log("listening on port 9999");
})