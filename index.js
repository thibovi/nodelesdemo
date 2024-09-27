const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let messages = [];

app.get('/messages', (req, res) => {
    res.json(messages);
    });

    app.post('/messages', (req, res) => {
        let message = req.body.message;
        console.log(message);
        messages.push(message);
        res.send('POST messages');
        });

app.get('/messages/:id', (req, res) => {
    let id = req.params.id;
    res.json(messages[id]);
    });
    
app.get('/messages/:name', (req, res) => {
    let name = req.params.name;
    res.json(messages[name]);
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });