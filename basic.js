const express = require('express');
let app = express()

app.get('/', (req, res, next) => {
    res.send('hello')
})

app.listen(3000);