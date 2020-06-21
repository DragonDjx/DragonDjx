
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.strings('product_id').notNullable();
        table.strings('title').notNullable();
        table.decimal('value').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
