/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(
    "features_send_manage_keep_lorems",
    function (table) {
      table.increments();

      table.string("info");

      table.string("info_2");

      table.string("info_3");

      table.string("info_4");

      table.string("title");

      table.string("title_2");

      table.string("title_3");

      table.string("title_4");

      table.string("text");

      table.string("option_1");

      table.string("option_2");

      table.string("option_3");

      table.timestamps(true, true);
    }
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("features_send_manage_keep_lorems");
};
