const path = require('path')
const express = require('express')

const app = express()
const dir = path.join(__dirname,'../public')

app.use(express.static(dir))



app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})