const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise') ;
const server = express();
const getConnection = require('./models/db')
server.use(cors());
server.set('view engine', 'ejs');
server.use(express.json({limit: '100mb'}));
getConnection();
const Notes = require('./models/notes');
const Orders = require('./models/orders');
const Users = require('./models/users');
const ProductsController = require ('./controllers/productsController');
const serverPort = 4000;
server.listen( serverPort, () => {
    console.log(`Nuestro servidor ha arrancado en http://localhost:${serverPort}/`);
});
server.get('/api/products', async (req, res) => {
    await ProductsController.List(req, res)
});
server.post ('/api/products', async (req,res) => {
    await ProductsController.Create(req, res)
})
server.put('/api/products/:productId', async (req,res) => {
    await ProductsController.Update(req,res)
})
server.delete('/api/products/:productId', async (req,res)=>{
    await ProductsController.Delete(req, res)
})