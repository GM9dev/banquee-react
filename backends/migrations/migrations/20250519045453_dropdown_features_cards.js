/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("dropdown_features_cards", function (table) {
    table.increments("id"); // criar coluna ID

    table.string("plan_1");

    table.string("plan_2");

    table.string("plan_3");

    table.string("info");

    table.string("text");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dropdown_features_cards");
};
