const knex = require('./knex'); 





module.exports = {
    getAll(table) {
        return knex(table);
    },
    getOne(table, id) {
        return knex(table).where('id', id).first();
    },
    addUser(username, password) {
        return knex('users').insert({ username: username, password: password});
    },
    addPost(description, user_id) {
        return knex('posts').insert({ description: description, user_id: user_id })
    },
    addAgree(userId, postId) {
        return knex('agree').insert({ userId: userId, postId: postId });
    },
    addDisagree(userId, postId){
        return knex('disagree').insert({ userId: userId, postId: postId });
    },
    delete(table, id) {
        return knex(table).where('id', id);
    }
}