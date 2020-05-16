const express = require('express')
var path = require('path')
const fs = require('fs')
const axios = require('axios')

const app = express()
const port = 3003
const filePath = path.join(__dirname, "public", "DownloadData.txt")
const TrackerFile = path.join(__dirname, "public", "IPtracker.txt")

app.use(express.static('public'))

const ReadAndWriteFile = () => {
    fs.readFile(filePath, function(err, data) {
        if (data) {
            fs.writeFile(filePath, parseInt(data)+1, (err) => {})   
        }
    });
}

const IPtracker = () => {
    axios.get("http://ipinfo.io").then((response) => {
        const ip = response["data"]["ip"] + "\n"
        fs.appendFile(TrackerFile, ip, (err) => {})
    })
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'public' + '/index.html'))
})

app.get('/download', (req, res) => {
    IPtracker()
    ReadAndWriteFile()
    const filePath = path.join(__dirname + '/cocktail-chief.apk')
    const fileName = "cocktail-chief.apk"
    res.download(filePath, fileName)
})

app.get('/stats', (req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (data) res.send(data.toString())
    })
})

app.get('/ip', (req, res) => {
    fs.readFile(TrackerFile, (err, data) => {
        if(data) res.send(data.toString())
    })
})

app.listen(port)