/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("site_footers", function (table) {
    table.increments();

    table.string("site_logo");

    table.string("boxes");

    table.string("last_word_1");

    table.string("last_word_2");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("site_footers");
};
