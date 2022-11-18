const express = require('express')
const app = express()
const PORT = 3000

app.use('/',(req,res)=>{
    console.log(res)
    res.send('server connected again!')
})

app.listen(PORT)