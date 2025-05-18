/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("features_all_ins_2", function (table) {
    table.increments("id");

    table.string("main_title");

    table.string("main_text");

    table.string("main_text_2");

    table.string("sub_title_1");

    table.string("sub_title_2");

    table.string("sub_title_3");

    table.string("sub_title_4");

    table.string("sub_title_5");

    table.string("text_1");

    table.string("text_2");

    table.string("sub_text");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("features_all_ins_2");
};
