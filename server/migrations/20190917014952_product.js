// creates our 'product' table
exports.up = function(knex) {
  return knex.schema.createTableIfNotExist('product', table => {
    table.increments();
    table.text('title').notNullable();
    table.text('description');
    table.decimal('price').notNullable();
    table
      .integer('quantity')
      .unsigned()
      .notNullable();
    table.text('image');
  });
};

exports.down = function(knex) {};
