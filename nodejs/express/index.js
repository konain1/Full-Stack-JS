

const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const app = express();

app.use(bodyparser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
   console.log('express js')
   res.sendFile(path.join(__dirname + "/index.html"))
})
app.get('/api/v1/users',(req,res)=>{
    
    res.json({
        name:'naruto',
        email:'naruto@gmail.com',
        password:'shared23'
    })

 })

app.post('/api/v1/register',(req,res)=>{
console.log("post")
const userName = req.body.name

res.send(`<h1>userName : ${userName}</h1>`)
// console.log(req.body)
console.log(userName)
})

app.get('/about',(req,res)=>{
    console.log('express js')
    res.send("<h2>about page</h2>")
 })


app.listen(5000,()=>{
    console.log('localhost:5000')
})