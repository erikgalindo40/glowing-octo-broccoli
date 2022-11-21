const express = require('express')
const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.json({text: 'data retrieved'})
})
app.post('/', (req,res)=>{
    res.json({text: 'data created'})
})
app.put('/:id', (req,res)=>{
    // console.log(req.params);
    res.json({text: `data ${req.params.id} updated`})
})
app.delete('/:id', (req,res)=>{
    res.json({text: `data ${req.params.id} deleted`})
})

app.listen(PORT)