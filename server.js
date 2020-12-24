const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

app.use(express.static('dist'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})