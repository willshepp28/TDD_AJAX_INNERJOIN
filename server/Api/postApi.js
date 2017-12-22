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
            .from('posts')
            .then((post) => {
                response.json(post);
            });
    });


    module.exports = router;