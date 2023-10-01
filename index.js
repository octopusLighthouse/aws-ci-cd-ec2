const express = require('express');
const app = express(), port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 3</p>');
})

app.listen(port, ()=> {
    console.log(`Demo app is up and listening to port: ${port}`);
})