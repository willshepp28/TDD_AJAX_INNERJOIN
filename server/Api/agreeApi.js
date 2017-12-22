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
            .from('agree')
            .then((user) => {
                response.json(user);
            });
    })
    .post((request,response) => {
        return knex.select()
            .from('agree')
            .insert({
                username: username,
                password: password
            })
    });



    module.exports = router;