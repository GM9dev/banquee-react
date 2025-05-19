/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("dropdown_blog_latests", function (table) {
    table.increments("id"); // criar coluna ID

    table.string("category");

    table.string("option_1");

    table.string("option_2");

    table.string("option_3");

    table.string("link");

    table.string("main_title");

    table.string("title_1");

    table.string("title_2");

    table.string("text");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dropdown_blog_latests");
};
