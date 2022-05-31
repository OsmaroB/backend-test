const rest = require('../models/connection')
const category = {};

category.read = async (req, res) => {
    const response = await rest.executeQuery("SELECT * FROM Categories") 
    res.json(response.data);
};

category.create = async (req, res) =>{
    const {id, name, description} =  req.body;
    const response = await rest.executeQuery("INSERT INTO Categories VALUES(@id, @name, @description)",
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
    }]);
    res.json(response);
};

category.updateForId = async (req, res) => {
    const {id} = req.params;
    const {name, description} =  req.body;

    const response = await rest.executeQuery("UPDATE Categories SET name = @name, description = @description WHERE id = @id",
    [{
        name: 'name',
        type: 'varchar',
        value: name 
    },{
        name: 'description',
        type: 'varchar',
        value: description 
    },{
        name: 'id',
        type: 'varchar',
        value: id 
    }]);
    res.json(response);
};

category.getForId = async (req, res) => {
    const {id} = req.params;
    const response = await rest.executeQuery("SELECT * FROM Categories WHERE id = @id",
    [{
        name: 'id',
        type: 'varchar',
        value: id 
    }]);
    res.json(response);
};

module.exports = category;