const knex = require('../databaseConnection/connection')

const login = (req, res) => {
    knex('user_details').insert({id: req.body.id, username: req.body.username, password: req.body.password})
    .then(() => {
        res.send('user login successfully 👩‍💼🤵')
    }).catch((err) => {
        res.send(err)
    });
};

const addLocation = (req, res) => {
    let location = {user_location: req.body.user_location}
    knex('user_details')
    .where({id: req.body.id})
    .update(location)
    .then(() => {
        res.send('user location added 📍📍📍')
        console.log("Your Location added", location)
        console.lo()
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
    knex.select('r_id','item_name', 'price').from('available_items')
    .where({r_id: req.params.id})
    .then((items) => {
        res.send(items)
    }).catch((err) => {
        res.send(err)
    });
};

const addToCart = (req, res) => {
    let items = {item_id: req.body.id, item: req.body.item, price: req.body.price}
    knex('add_cart_items').insert(items)
    .then(() => {
        res.send(items)
    }).catch((err) => {
        res.send(err)
    });
};

const showTotalCost = (req, res) => {
    knex.select('price').from('add_cart_items')
    .then((cost) => {
        let i = 0
        var total_cost = 0
        while(i<cost.length) {
            total_cost+= cost[i]['price']
            i++
        };
        res.send(String(`Total Cost:  ${total_cost}`))
        console.log('Total cost💵💷:', total_cost)
    }).catch((err) => {
        res.send(err)
    })
}
const pymentMethod = (req, res) => {
    res.send('Your Oder placed Successfully 🎈🎈🎈')
    console.log('Your Oder placed Successfully 🎈🎈🎈')
};

module.exports ={
    login,
    addLocation,
    allCategories,
    chooseCategory,
    showAllItems,
    addToCart,
    showTotalCost,
    pymentMethod
}