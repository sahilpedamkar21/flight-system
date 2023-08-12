const express = require('express');
const bodyparser = require("body-parser");

const {PORT} = require('./config/serverConfig');
//const {City} = require('./models/index');
const CityRepository = require('./repository/city-repository');


const setupAndStartServer = async () => {
    const app = express();
  //  const PORT = 3000;
    
  
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended:true}));
  
  
  app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        //const repo = new CityRepository();
        //repo.createCity({name : "New Delhi"});
    })

}

setupAndStartServer();