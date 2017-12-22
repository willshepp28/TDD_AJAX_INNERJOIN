
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { description:'my day is going well', user_id: 1},
        { description:'time to get money', user_id: 1},
        { description:'Thinking about life', user_id: 2},
        { description: 'Where do i get food', user_id: 2},
        { description: 'Happy people yey (in my rkelly vc', user_id: 3},
        { description: 'Grind or starve. Sink or swim.', user_id: 3},
        { description: 'YOLO', user_id: 4},
        { description: 'Live within your means', user_id: 4},
        { description: 'Hey pretty people', user_id: 4},
        { description: 'i need love', user_id: 4}
      ]);
    });
};


