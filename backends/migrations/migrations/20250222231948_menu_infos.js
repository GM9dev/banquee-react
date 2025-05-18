/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("menu_infos", function (table) {
    table.increments("id"); // criar coluna ID

    table.string("site_logo");

    table.string("option_1");

    table.string("option_2");

    table.string("option_3");

    table.string("option_4");

    table.string("login");

    table.string("open_account");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("menu_infos");
};
