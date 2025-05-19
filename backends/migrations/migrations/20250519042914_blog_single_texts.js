/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("blog_single_texts", function (table) {
    table.increments("id"); // criar coluna ID

    table.string("app");

    table.string("main_title");

    table.string("main_title_2");

    table.string("subtitle_1");

    table.string("subtitle_2");

    table.string("subtitle_3");

    table.string("title_1");

    table.string("text_1");

    table.string("text_2");

    table.string("title_2");

    table.string("text_3");

    table.string("share");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("blog_single_texts");
};
