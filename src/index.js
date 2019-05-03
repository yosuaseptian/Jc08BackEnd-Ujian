const express = require('express')
const userRouter = require('./routers/userRouter')
const tasksRouter = require('./routers/taskRouter')

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send(`<h1>API Running on Heroku port ${port}</h1>`)
})

app.use(express.json())
app.use(userRouter)
app.use(tasksRouter)




























app.listen(port, () => {
    console.log("Running at ", port);
    
})