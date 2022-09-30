const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://manjunatha2207:Mydb1234@cluster0.ozc1mk4.mongodb.net/CypressDB'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected to MongoDB....')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(8000, () => {
    console.log('Listening to port 8000....')
})