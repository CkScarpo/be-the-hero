
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        //auto-increment
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        //decimal = float
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        //fk
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
