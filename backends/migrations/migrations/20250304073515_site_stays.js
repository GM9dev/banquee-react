/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("site_stays", function (table) {
    table.increments();

    table.string("sub_title");

    table.string("main_title");

    table.string("description");

    table.string("list_benefits");

    table.string("options");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("site_stays");
};
