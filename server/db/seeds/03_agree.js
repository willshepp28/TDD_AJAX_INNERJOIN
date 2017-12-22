
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('agree').del()
    .then(function () {
      // Inserts seed entries
      return knex('agree').insert([
        { userId: 2 , postId: 1},
        { userId: 3 , postId: 1},
        { userId: 4 , postId: 1},
        { userId: 1 , postId: 4},
        { userId: 3 , postId: 4},
        { userId: 2 , postId: 4}
      ]);
    });
};


// .createTable('agree', (table) => {
//   table.increments();
//   table.integer('userId').unsigned().references('id').inTable('users').onDelete('cascade');
//   table.integer('postId').unsigned().references('id').inTable('posts').onDelete('cascade');
// })
// .createTable('disagree', (table) => {
//   table.increments();
//   table.integer('userId').unsigned().references('id').inTable('users').onDelete('cascade');
//   table.integer('postId').unsigned().references('id').inTable('posts').onDelete('cascade');
// })