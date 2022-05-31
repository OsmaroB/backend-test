require('dotenv').config();
const userDB = process.env.USER_DB;
const passwordDB = process.env.PASSWORD_DB;
const serverDB = process.env.SERVER_DB;
const nameDB = process.env.NAME_DB;
const portDB = process.env.PORT_DB;


const rest = new (require('rest-mssql-nodejs'))({
    user: userDB,
    password: passwordDB,
    server: serverDB, // replace this with your IP Server
    database: nameDB,
    port: parseInt(portDB), // this is optional, by default takes the port 1433
    options: { 
        encrypt: true, // this is optional, by default is false
    } 
});

module.exports = rest;