/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("site_bankings", function (table) {
    table.increments(); // criar coluna ID

    table.string("main_title");

    table.string("description");

    table.string("list_benefits"); // "Instant Transfer, Payments worldwide, Saving account, 100% mobile banking",

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
  return knex.schema.dropTableIfExists("site_bankings");
};
