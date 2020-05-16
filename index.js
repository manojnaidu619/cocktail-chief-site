const express = require('express')
var path = require('path')
const fs = require('fs');

const app = express()
const port = 3003
const filePath = path.join(__dirname, "public", "DownloadData.txt")

app.use(express.static('public'))

const ReadAndWriteFile = () => {
    fs.readFile(filePath, function(err, data) {
        if (data) {
            fs.writeFile(filePath, parseInt(data)+1, function (err) {})   
        }
    });
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'public' + '/index.html'))
})

app.get('/download', (req, res) => {
    ReadAndWriteFile()
    const filePath = path.join(__dirname + '/cocktail-chief.apk')
    const fileName = "cocktail-chief.apk"
    res.download(filePath, fileName)
})

app.listen(port, () => console.log("Running!"))