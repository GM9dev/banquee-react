/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("support_faq_lists", function (table) {
    table.increments("id"); // criar coluna ID

    table.string("category");

    table.string("option_1");

    table.string("option_2");

    table.string("option_3");

    table.string("faq_1");

    table.string("question_1");

    table.string("question_2");

    table.string("question_3");

    table.string("question_4");

    table.string("answer");

    table.string("question_5");

    table.string("faq_2");

    table.string("question_6");

    table.string("question_7");

    table.string("question_8");

    table.string("question_9");

    table.string("faq3");

    table.string("question_10");

    table.string("question_11");

    table.string("question_12");

    table.string("question_13");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("support_faq_lists");
};
