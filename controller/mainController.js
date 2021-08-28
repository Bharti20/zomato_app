const knex = require('../databaseConnection/connection')

const login = (req, res) => {
    knex('user_details').insert({id: req.body.id, username: req.body.username, password: req.body.password})
    .then(() => {
        res.send('user login successfully')
    }).catch((err) => {
        res.send(err)
    });
};

const resturants = (req, res) => {
    knex('resturants').insert({id: req.body.id, resturant_name: req.body.resturant_name, Dishes: req.body.Dishes, price: req.body.price})
    .then(() => {
        res.send('data inserted into resturants')
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

const allCategories = (req,res) => {
    knex.select('*').from('available_categories')
    .then((allCategories) => {
        res.send(allCategories)
    }).catch((err) => {
        res.send(err)
    });
};

const chooseCategory = (req, res) => {
    knex('available_categories')
    .join('available_resturants', 'available_categories.c_id', '=', 'available_resturants.c_id')
    .where('available_categories.c_id', req.params.id)
    .select('available_resturants.resturant_name', 'r_id')
    .then((items) => {
        res.send(items)
    }).catch((err) => {
        res.send(err)
    });
};

const showAllItems = (req, res) => {
    knex.select('item_name', 'price').from('available_items')
    .where({r_id: req.params.id})
    .then((items) => {
        res.send(items)
    }).catch((err) => {
        res.send(err)
    });
};


module.exports ={
    login,
    addLocation,
    resturants,
    allCategories,
    chooseCategory,
    showAllItems
}