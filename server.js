// initilizing the Code
require('dotenv').config();

const express = require('express')

const morgan = require('morgan')

const cors = require('cors')

const app = express()

const port = process.env.PORT


const expHbs = require("express-handlebars")

const fileUpload = require('express-fileupload')

// middleware setup 

app.use(morgan('dev'))

app.use(cors())

app.use(express.static('public'))

app.use(fileUpload())

app.use(express.urlencoded({ extended:true }));

app.engine('hbs', expHbs({extname:'hbs'}))

app.set('view engine', 'hbs')


const authRouter = require('./routes/auth')

app.use('/', authRouter)


// start server 

app.listen(
    port,
    function(){
        console.log('server is running in : ' + port);   
})
 