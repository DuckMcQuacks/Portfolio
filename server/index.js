const express = require('express');

const app = express();

app.get('/Contact',(request, response) =>{
    response.send("Does this bloody work?")
});

app.listen(process.env.PORT || 3000, () => console.log('It works?'))