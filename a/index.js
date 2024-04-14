// requiring database
// require("./config/database");
require('dotenv').config();


const express = require("express");
const cors = require("cors"); 
const bodyParser =  require("body-parser");

const router = require("./router/index");
const app = express();  
const port = process.env.port;



//config API routes;  
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false }));  
app.use(router) 
 
// for testing index page 
app.get("/", (req, res) => {
      res.send(`<h1>Hello!</h1>`)
  });
  

  // node js apperror class (error) extanding  
app.all("*", (req, res, next) => { 
    res.send(`The URL ${req.originalUrl} does not exists`);
});
  


app.listen(port, () => {
    console.log(`Application is listening at port ${port}`); 
});


 

module.exports = app;