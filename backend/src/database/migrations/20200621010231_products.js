
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
        table.string('id').primary();
        table.string('title').notNullable();
        table.decimal('value').notNullable();
        
        table.integer('stock').defaultTo(0);
        table.integer('sold').defaultTo(0);

        table.string('image');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
