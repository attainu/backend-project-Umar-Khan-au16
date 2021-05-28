const fileUpload = require('express-fileupload')

const expHbs = require("express-handlebars")

const express = require('express')

const app = express()

app.use(express.static('public'))

app.use(fileUpload())

app.use(express.urlencoded({ extended:true }));

const fs = require('fs');

// const users = require('./database/users.json')

const cookiePraser = require('cookie-parser')

app.use(cookiePraser())

app.engine('hbs', expHbs({extname:'hbs'}))

app.set('view engine', 'hbs')






const authRouter = require('./routes/auth')

app.use('/', authRouter)


app.listen(5000, () => {
    console.log('server started')
})
 