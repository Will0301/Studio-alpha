const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/studio-alpha-code'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/studio-alpha-code/index.html');
})

app.listen(PORT, () =>{
    console.log("Server ON");
})
