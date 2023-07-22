const mongoose = require('mongoose');

const getConnection = async () => {
    const user = process.env.USERDB || 'AndreaFerreiro';
    const pass = process.env.PASSBD || 'Hbz5W2gBCxof222Y';
    const dbName = process.env.NAMEDB || 'AlmacenVirtual';
    const uri = `mongodb+srv://${user}:${pass}@tualmacenvirtual.cej3jyh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    mongoose
        .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('conectado a MongoDB'))
        .catch((e) => console.log('error de conexión', e));
    
};

module.exports =getConnection;