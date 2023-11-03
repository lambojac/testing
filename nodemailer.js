const nodemailer=require("nodemailer")
//require("dotenv").config()

const transporter=nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"",//input your username
        pass:""// input your password
    }
})

const mailOptions={
from:{
name:"adamokehinde068@gmail.com",
address:"adamokehinde068@gmail.com"
},
    to:"adamokennie@gmail.com",
    subject:"hello",
    text:"how are you",
    html:"<b> Hello world</b>",
}

const sendMail=async(transporter, mailOptions)=>{
    try{
        await transporter.sendMail(mailOptions)
    }catch(error){
        console.error(error)
    }
}

sendMail(transporter, mailOptions)