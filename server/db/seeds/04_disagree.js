
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('disagree').del()
    .then(function () {
      // Inserts seed entries
      return knex('disagree').insert([
        { userId: 3 , postId: 2},
        { userId: 4 , postId: 2},
        { userId: 4 , postId: 3},
        { userId: 1 , postId: 3},
        { userId: 3 , postId: 3},
        { userId: 2 , postId: 3}
      ]);
    });
};
