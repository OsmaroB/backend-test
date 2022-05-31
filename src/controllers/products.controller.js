const rest = require('../models/connection')
const product = {};

product.read = async (req, res) => {
    const sql = `SELECT P.id, P.name, P.description, P.purchase_price, P.sale_price, P.stock, P.status, C.name as category, PR.name as provider from Products AS P 
    INNER JOIN Categories AS C ON P.idCategory = C.id 
    INNER JOIN Providers AS PR ON P.idProvider = PR.id 
    WHERE P.status = 0`;
    const response = await rest.executeQuery(sql) 
    res.json(response.data);
};

product.create = async (req, res) =>{
    const {
        id, 
        name, 
        description,
        purchase_price,
        sale_price,
        stock,
        status,
        idProvider,
        idCategory
    } =  req.body;
    const sql = `INSERT INTO Products VALUES(@id, @name, @description, @purchase_price, @sale_price, @stock, @status , @idProvider, @idCategory)`;
    const response = await rest.executeQuery(sql,
    [{
        name: 'id',
        type: 'varchar',
        value: id 
    },{
        name: 'name',
        type: 'varchar',
        value: name 
    },{
        name: 'description',
        type: 'varchar',
        value: description 
    },{
        name: 'purchase_price',
        type: 'decimal',
        value: purchase_price 
    },{
        name: 'sale_price',
        type: 'decimal',
        value: sale_price 
    },{
        name: 'stock',
        type: 'bigint',
        value: stock 
    },{
        name: 'status',
        type: 'bit',
        value: status 
    },{
        name: 'idProvider',
        type: 'varchar',
        value: idProvider 
    },{
        name: 'idCategory',
        type: 'varchar',
        value: idCategory 
    }]);
    res.json(response);
};

product.updateForId = async (req, res) => {
    const {id} = req.params;
    const {
        name, 
        description,
        purchase_price,
        sale_price,
        stock,
        status,
        idProvider,
        idCategory
    } =  req.body;
    const sql = `UPDATE Products SET name = @name, description = @description, purchase_price = @purchase_price, sale_price = @sale_price, stock = @stock, status = @status , idProvider = @idProvider, idCategory = @idCategory WHERE id = @id`;
    const response = await rest.executeQuery(sql,
    [{
        name: 'name',
        type: 'varchar',
        value: name 
    },{
        name: 'description',
        type: 'varchar',
        value: description 
    },{
        name: 'purchase_price',
        type: 'decimal',
        value: purchase_price 
    },{
        name: 'sale_price',
        type: 'decimal',
        value: sale_price 
    },{
        name: 'stock',
        type: 'bigint',
        value: stock 
    },{
        name: 'status',
        type: 'bit',
        value: status 
    },{
        name: 'idProvider',
        type: 'varchar',
        value: idProvider 
    },{
        name: 'idCategory',
        type: 'varchar',
        value: idCategory 
    },{
        name: 'id',
        type: 'varchar',
        value: id 
    }]);
    res.json(response);
};

product.deleteForId = async (req, res) => {
    const {id} = req.params;
    const response = await rest.executeQuery("UPDATE Products SET status = @status WHERE id = @id",
    [{
        name: 'status',
        type: 'bit',
        value: 1 
    },{
        name: 'id',
        type: 'varchar',
        value: id 
    }]);
    res.json(response);
};

product.getForId = async (req, res) => {
    const {id} = req.params;
    const sql = `SELECT P.id, P.name, P.description, P.purchase_price, P.sale_price, P.stock, P.status, C.name as category, PR.name as provider from Products AS P 
    INNER JOIN Categories AS C ON P.idCategory = C.id 
    INNER JOIN Providers AS PR ON P.idProvider = PR.id 
    WHERE P.status = 0 AND P.id = @id
    `;
    const response = await rest.executeQuery(sql,
    [{
        name: 'id',
        type: 'varchar',
        value: id 
    }]);
    res.json(response);
};
module.exports = product;
