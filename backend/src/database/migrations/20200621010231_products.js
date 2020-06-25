
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
        table.string('id').primary();
        table.string('title').notNullable();
        table.decimal('price').notNullable();
        table.decimal('parceled').notNullable();

        table.integer('stock').defaultTo(0);
        table.integer('sold').defaultTo(0);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
