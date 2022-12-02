const express = require('express')
const router = express.Router()

router.route('/')
.get((req,res)=>
res.json(`data retrieved`))
.post((req,res)=>res.json(`data created`))

router.route('/:id')
.put((req,res)=>console.log(req.headers))
.delete((req,res)=>res.json(`data ${req.params.id} deleted`))

module.exports = router