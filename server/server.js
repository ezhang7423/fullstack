const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
let app = express()


app.use(bodyParser.urlencoded({extended: false}))
app.post('/contact-form', (req, res) =>{
    console.log(req.body.name)
    console.log(req.body.email)
    res.send('thank you')
})


app.get('/order/:id', (req, res) => {
    let id = req.params.id;
    let email = req.query.email;
    res.send(`${Number(id)+5} email is: ${email}`)
})

app.use(express.static(path.join(__dirname, "../public")))

app.listen(3000);