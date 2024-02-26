const express = require('express')
const cors = require('cors')

const app = express()
require('dotenv').config()
const port = process.env.PORT || 2555

const db = require('./DL/db')
db.connect()

app.use(express.json())
app.use(cors())

const userRouter = require('./Router/user.router')
app.use('/user', userRouter)

const todoRouter = require('./Router/todo.router')
app.use('/todo', todoRouter)


app.listen(port,()=>console.log("🪂Server is up"))
