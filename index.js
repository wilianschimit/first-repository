const express = require('express');
const server = express();
const tipos = require ('./personagens.json');
cors = require ('cors')

server.use (cors())
server.use (express())

server.get ('/',(req,res)=>{
    return res.json(tipos)
});

server.listen(300,()=>{
    console.log ('servidor esta funcionando')
});