const  express = require('express')
const sendMail = require('./controller/sendMail')
const app = express()
let PORT = 5000
app.get("/",(req,res)=>{
    res.send("I am a server")
})

app.get("/mail" , sendMail);

const start = async() =>{
    try {
        app.listen(PORT,()=>{
            console.log(`I am live in port no. ${PORT} `);
        })
    } catch (error) {
        console.log(error);
    }
}
start()