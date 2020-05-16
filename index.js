const express = require('express')
var path = require('path')

const app = express()
const port = 3003

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'public' + '/index.html'))
})

app.listen(port)