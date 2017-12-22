
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'will', password: 123},
        { username: 'tom', password: 222 },
        { username: 'bill', password: 333 },
        { username: 'tammy', password: 444 }
      ]);
    });
};



