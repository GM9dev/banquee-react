/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("compare_supports", function (table) {
    table.increments("id"); // criar coluna ID

    table.string("title");

    table.string("sub_title");

    table.string("phone");

    table.string("contact");

    table.string("email");

    table.string("contact_2");

    table.string("info");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("compare_supports");
};
