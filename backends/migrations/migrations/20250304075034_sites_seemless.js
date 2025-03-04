/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("sites_seemless", function (table) {
    table.increments();

    table.string("sub_title");

    table.string("mainTitle");

    table.string("description");

    table.string("list_benefits");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("sites_seemless");
};
