const express = require('express')
const app = express()
var path = require('path')
const port = 3003

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'public' + '/index.html'));
})

app.get('/download', (req, res) => {
    const filePath = path.join(__dirname + '/cocktail-chief.apk')
    const fileName = "cocktail-chief.apk"
    res.download(filePath, fileName);  
})

app.listen(port, () => console.log("Running!"))