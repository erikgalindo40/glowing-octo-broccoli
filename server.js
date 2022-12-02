const express = require('express')
const app = express()
const PORT = 3000

// const router = require('./routes/testRoutes')

app.use('/', require('./routes/testRoutes'))
app.use('/:id',require('./routes/testRoutes'))

app.listen(PORT)