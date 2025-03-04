/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("features_all_ins", function (table) {
    table.increments();

    table.string("info");

    table.string("main_title");

    table.string("description");

    table.string("description_2");

    table.string("button_1");

    table.string("button_2");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("features_all_ins");
};
