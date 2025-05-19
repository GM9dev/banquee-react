/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("blog_articles", function (table) {
    table.increments("id"); // criar coluna ID

    table.string("category");

    table.string("option_1");

    table.string("option_2");

    table.string("option_3");

    table.string("option_4");

    table.string("title_1");

    table.string("text");

    table.string("title_2");

    table.string("title_3");

    table.string("title_4");

    table.string("title_5");

    table.string("title_6");

    table.string("app");

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
  return knex.schema.dropTableIfExists("blog_articles");
};
