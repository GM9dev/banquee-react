/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("site_organizes", function (table) {
    table.increments("id");

    table.string("sub_title");

    table.string("main_title");

    table.string("description");

    table.string("options");

    table.string("boxes");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("site_organizes");
};
