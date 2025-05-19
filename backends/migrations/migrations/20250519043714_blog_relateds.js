/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("blog_relateds", function (table) {
    table.increments("id"); // criar coluna ID

    table.string("main_title");

    table.string("link");

    table.string("title_1");

    table.string("text");

    table.string("title_2");

    table.string("title_3");

    table.string("product");

    table.string("technology");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("blog_relateds");
};
