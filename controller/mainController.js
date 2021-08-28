const knex = require('../databaseConnection/connection')

const login = (req, res) => {
    knex('user_details').insert({id: req.body.id, username: req.body.username, password: req.body.password})
    .then(() => {
        res.send('user login successfully')
    }).catch((err) => {
        res.send(err)
    });
};

const addLocation = (req, res) => {
    knex('user_details')
    .where({id: req.body.id})
    .update({user_location: req.body.user_location})
    .then(() => {
        res.send('user location added')
    }).catch((err) => {
        res.send(err)
    });
};





module.exports ={
    login,
    addLocation 
}