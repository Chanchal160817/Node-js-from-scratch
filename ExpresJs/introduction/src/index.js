// Template Engine:-

// A template engine enables you to use static template files in your application. At runtime, the template engine replace variable in template file with actual value ,and transform the template into an HTML file sent to the client.This approch makes it easier to design an HTML page.
// example:-Pug,Ejs

// Hbs :- view engine of handlebars.js

const express = require('express');
const path = require('path');
const app = express()
const hbs = require('hbs');
const  port = 3000

// built in middleware
const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// to set the view engine

app.set('view engine','hbs')
app.set('views', templatePath);
hbs.registerPartials(partialsPath)

// app.use(express.static(staticPath))

// template engine route
app.get("",(req,res)=>{
    res.render("index")
})
app.get('/',(req,res)=>{
    res.send("hello for the express server")
})
app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/about/*',(req,res)=>{
    res.render('404',{
        errorcomemnt:`opps this about us page couldn't be found`
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        errorcomemnt:`opps page couldn't be found`
    })
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})