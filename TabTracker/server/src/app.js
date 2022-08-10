const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register',(req,res)=>{
    console.log('Register API called')
    console.log(req.body.email)
    res.send({
        message:`The user was registered!! ${req.body.email}`
    });
})

app.listen(8081)

