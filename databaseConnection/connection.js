
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host:'localhost',
        user: 'root',
        password: 'Bharti@1234',
        database: 'zomatoApp'
    }
});
knex.schema
// .createTable('user_details', function(table) {
//     table.integer('id')
//     table.string('username'),
//     table.string('password')
//     table.string('user_location')
// })
// .createTable('resturants', function(table) {
//     table.integer('id'),
//     table.string('resturant_name'),
//     table.string('Dishes'),
//     table.string('price')
// })
// .then(() => {
//     console.log('Table created')
// }).catch((err) => {
//     console.log(err)
// });

module.exports = knex

   
