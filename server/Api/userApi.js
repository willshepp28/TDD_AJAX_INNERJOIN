/*
|--------------------------------------------------------------------------
|  Dependencies
|--------------------------------------------------------------------------
*/

const router = require('express').Router(),
    queries = require('../db/queries'),
    knex = require('../db/knex.js');





/*
|--------------------------------------------------------------------------
|  CRUD
|--------------------------------------------------------------------------
*/
router
    .route('/')
    .get((request, response) => {
        queries.getAll('users').then((user) => response.json(user));
    })
    .post((request, response) => {
        return knex.select()
            .from('users')
            .insert({
                username: username,
                password: password
            })
    });





router.get('/:id', (request, response) => {
    queries.getOne('users', request.params.id).then((user) => { 
        if(user) { 
            response.json(user);
        } else {
            response.json({ message: 'not found'});
        }
        
    })
});




module.exports = router;