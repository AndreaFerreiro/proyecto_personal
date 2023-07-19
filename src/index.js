const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise') ;

const server = express();

server.use(cors());
server.set('view engine', 'ejs');
server.use(express.json({limit: '100mb'}));

const getConnection = async () => {
    const connection = await mysql.createConnection( {
        host: 'sql.freedb.tech',
        database: 'freedb_project-module-4-team-1',
        user: 'freedb_programadoras_junior',
        password: '#8aVHtn4SpqAMbP',
    });
    await connection.connect();
    console.log(`Conexion establecidad ${connection.threadId}`);
    return connection;
}
getConnection();

const serverPort = 4000;
server.listen( serverPort, () => {
    console.log(`Nuestro servidor ha arrancado en http://localhost:${serverPort}/`);
});