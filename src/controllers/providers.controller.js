const rest = require('../models/connection')
const provider = {};

provider.read = async (req, res) => {
    const response = await rest.executeQuery("SELECT * FROM Providers WHERE status = 0") 
    res.json(response.data);
};

provider.create = async (req, res) =>{
    const {id, name, address, phone, email, status} =  req.body;
    const response = await rest.executeQuery("INSERT INTO Providers VALUES(@id, @name, @address, @phone, @email, @status)",
    [{
        name: 'id',
        type: 'varchar',
        value: id 
    },{
        name: 'name',
        type: 'varchar',
        value: name 
    },{
        name: 'address',
        type: 'varchar',
        value: address 
    },{
        name: 'phone',
        type: 'varchar',
        value: phone 
    },{
        name: 'email',
        type: 'varchar',
        value: email 
    },{
        name: 'status',
        type: 'bit',
        value: status 
    }]);
    res.json(response);
};

provider.updateForId = async (req, res) => {
    const {id} = req.params;
    const {name, address, phone, email} =  req.body;
    const response = await rest.executeQuery("UPDATE Providers SET name = @name, address = @address, phone = @phone, email = @email WHERE id = @id",
    [{
        name: 'name',
        type: 'varchar',
        value: name 
    },{
        name: 'address',
        type: 'varchar',
        value: address 
    },{
        name: 'phone',
        type: 'varchar',
        value: phone 
    },{
        name: 'email',
        type: 'varchar',
        value: email 
    },{
        name: 'id',
        type: 'varchar',
        value: id 
    }]);
    res.json(response);
};

provider.deleteForId = async (req, res) => {
    const {id} = req.params;
    const response = await rest.executeQuery("UPDATE Providers SET status = @status WHERE id = @id",
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

provider.getForId = async (req, res) => {
    
};

module.exports = provider;