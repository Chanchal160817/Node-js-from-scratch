const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
// return promise 
mongoose.connect(
    "mongodb+srv://Chanchal25-DB:ZHrSPQhp8HuOM2Yy@cluster0.ypi01as.mongodb.net/StudentManagement",
    {   
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('Connection Successfully established with MongoDB');
}).catch((err)=>{
    console.log(err.message);
});
