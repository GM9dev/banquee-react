/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("site_peoples", function (table) {
    table.increments("id");

    table.string("sub_title");

    table.string("main_title");

    table.string("info");

    table.string("boxes");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("site_peoples");
};
