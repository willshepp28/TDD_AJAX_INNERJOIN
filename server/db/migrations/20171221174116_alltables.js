

exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('users', (table) => {
          table.increments();
          table.string('username').notNullable();
          table.string('password').notNullable();
      })
      .createTable('posts', (table) => {
          table.increments();
          table.text('description');
          table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
      })
      .createTable('agree', (table) => {
          table.increments();
          table.integer('userId').unsigned().references('id').inTable('users').onDelete('cascade');
          table.integer('postId').unsigned().references('id').inTable('posts').onDelete('cascade');
      })
      .createTable('disagree', (table) => {
          table.increments();
          table.integer('userId').unsigned().references('id').inTable('users').onDelete('cascade');
          table.integer('postId').unsigned().references('id').inTable('posts').onDelete('cascade');
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('disagree').dropTable('agree').dropTable('posts').dropTable('users');
  };