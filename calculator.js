const express = require('express');
const bodyParser = require('body-parser');

//Ejecución de express
const app = express();

//use body-parser
app.use(bodyParser.urlencoded({extended: true}));


//Listener
app.listen(3000, () =>{
    console.log('Server started on port 3000');
})

//ROUTES

//root
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

//post
app.post("/", (req, res) => {
    //Calculadora
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let resultado = num1 + num2;

    res.send('El resultado es ' + resultado);
})



