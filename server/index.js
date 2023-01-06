const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const PORT = 5000

app.get('/api',(req, res) =>{
    res.json("stupid shit");
});

app.listen(PORT, () => console.log('It works?'))