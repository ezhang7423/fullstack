const express = require('express');
const path = require('path')
let app = express()

app.use(express.static(path.join(__dirname, "../public")))


app.get('/order/:id', (req, res) => {
    let id = req.params.id;
    let email = req.query.email;
    res.send(`${Number(id)+5} email is: ${email}`)
})
app.listen(3000);