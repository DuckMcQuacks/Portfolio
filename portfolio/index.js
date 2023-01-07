const express = require('express');
const cors = require('cors');
const app = express();
var nodemailer = require('nodemailer');
app.use(cors())
app.use(express.json())
const PORT = 5000

app.get('/api/test',(req, res) =>{
    res.json("stupid shit");
});
app.post('/api/email',(req, res) =>{
    const {name, email, message} = req.body
    
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'menus.dominik@gmail.com',
      pass: 'zkcvyuwsbxyqoefg'
    }
  });
    var mailOptions = {
        from: 'menus.dominik@gmail.com',
        to: 'menus.dominik@gmail.com',
        subject: name+"mail from portfolio",
        text: "Senders provided email:\n "+email+" \nSenders message: \n"+message
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});


app.listen(PORT, () => console.log('It works?'))