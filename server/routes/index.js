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
    


module.exports = router;