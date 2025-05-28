/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(
    "site_seemless_integrations",
    function (table) {
      table.increments("id"); // criar coluna ID

      table.string("sub_title");

      table.string("main_title");

      table.string("description");

      table.string("list_benefits");

      table.timestamps(true, true);
    }
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("site_seemless_integrations");
};
