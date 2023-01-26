// For navigation
// Task 
// 1. www.verma.com - welcome to my home page
// 2. /about - welcome to my about page
// 3. /contact - welcome to my contact page
// 4. /temp - welcome to my temp page

// Routing:-
// Routing refers to how an application’s endpoints (URIs) respond to client requests.
const express = require('express');
const app = express();
const port = 3000
app.get('/',(req,res)=>{
    res.send('Welcome to my home page');
})
app.get('/about',(req,res)=>{
    res.send('Welcome to my about page');
})
app.get('/contact',(req,res)=>{
    res.send('Welcome to my contact page');
})
app.get('/temp',(req,res)=>{
    res.status(200).send('Welcome to my temp page');
})

app.listen(port,()=>{
    console.log(`listen on port no ${port}`);
}) 