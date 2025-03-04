/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(
    "features-choose-your-cards",
    function (table) {
      table.increments();

      table.string("subt_title");

      table.string("main_title");

      table.string("main_text_1");

      table.string("main_text_2");

      table.string("info_1");

      table.string("sub_info");

      table.string("info_2");

      table.string("info_3");

      table.string("title_1");

      table.string("price_1");

      table.string("title_2");

      table.string("price_2");

      table.string("title_3");

      table.string("text_1");

      table.string("text_2");

      table.timestamps(true, true);
    }
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("features-choose-your-cards");
};
