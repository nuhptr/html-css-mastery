const express = require("express")
const app = express()
const port = 3000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => {
    const buah = [
        {name: 'apel'},
        {name: 'melon'},
        {name: 'mangga'}
    ]
    // res.send("hello, Welcome to express JS")
    res.render('index', {
        name : "adi nugraha putra",
        umur : 22,
        buah: buah
    })
})

app.listen(port, () => console.log(`example app listening at http://localhost:${port}`))