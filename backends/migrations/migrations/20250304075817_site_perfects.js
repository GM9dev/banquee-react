/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("site_perfects", function (table) {
    table.increments("id");

    table.string("sub_title");

    table.string("main_title");

    table.string("main_title_2");

    table.string("description");

    table.string("description_2");

    table.string("main_button_text");

    table.string("second_button_text");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("site_perfects");
};
