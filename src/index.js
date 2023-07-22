const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise') ;
const server = express();
const getConnection = require('./models/db')
server.use(cors());
server.set('view engine', 'ejs');
server.use(express.json({limit: '100mb'}));
getConnection();
const Products = require('./models/products')
const serverPort = 4000;
server.listen( serverPort, () => {
    console.log(`Nuestro servidor ha arrancado en http://localhost:${serverPort}/`);
});
Products.find().then()
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.log(error);
});
