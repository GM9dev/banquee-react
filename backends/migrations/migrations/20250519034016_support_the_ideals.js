/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("support_the_ideals", function (table) {
    table.increments("id"); // criar coluna ID

    table.string("info");

    table.string("text_1");

    table.string("text_2");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("support_the_ideals");
};
