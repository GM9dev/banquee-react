/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("compare_plans", function (table) {
    table.increments("id"); // criar coluna ID

    table.string("plan");

    table.string("sub_info");

    table.string("price");

    table.string("text_1");

    table.string("text_2");

    table.string("plan_2");

    table.string("price_2");

    table.string("time");

    table.string("plan_3");

    table.string("price_3");

    table.string("menu_1");

    table.string("info_1");

    table.string("text_3");

    table.string("condition");

    table.string("info_2");

    table.string("info_3");

    table.string("info_4");

    table.string("info_5");

    table.string("info_6");

    table.string("info_7");

    table.string("info_8");

    table.string("info_9");

    table.string("info_10");

    table.string("menu_2");

    table.string("condition_2");

    table.string("condition_3");

    table.string("menu_3");

    table.string("condition_4");

    table.string("condition_5");

    table.string("condition_6");

    table.string("condition_7");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("compare_plans");
};
