
exports.up = function(knex) {
    return knex.schema.createTable('images', function(table) {
        table.increments();

        table.string('name').notNullable();
        table.integer('size').notNullable();
        table.string('key').notNullable();
        table.string('url').notNullable();

        table.string('product_id').notNullable();

        table.foreign('product_id').references('id').inTable('products');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('images');
};