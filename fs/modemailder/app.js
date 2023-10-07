const express=require('express');
const sendmail=require('./controller/sendmail');
const app=express();
const port=8000;
app.get('/',(req,res)=>{
    res.end('i am the server');
});
app.get('/sendemail',sendmail);
const Start=async()=>{
    try {
        app.listen(port,()=>{
            console.log(`listening to the port number${port}` )
        })
    } catch (error) {
        
    }
}

Start();

