/*
|--------------------------------------------------------------------------
|  Dependencies
|--------------------------------------------------------------------------
*/

const router = require('express').Router(),
knex = require('../db/knex.js');





/*
|--------------------------------------------------------------------------
|  CRUD
|--------------------------------------------------------------------------
*/
router  
    .route('/')
    .get( (request, response) => {
        return knex.select()
            .from('users')
            .then((user) => {
                response.json(user);
            });
    })
    .post((request,response) => {
        return knex.select()
            .from('users')
            .insert({
                username: username,
                password: password
            })
    });



module.exports = router;