const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.json({data:"Hello"})
})

app.post('/secret',(req,res)=>{
    res.json({data:"secret"})
})

app.listen(3000,()=>{
    console.log('App is running on port 3000')
})