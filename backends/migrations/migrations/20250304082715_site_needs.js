/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("site_needs", function (table) {
    table.increments();

    table.string("main_title");

    table.string("contact_phone_number");

    table.string("contact_number");

    table.string("email");

    table.string("contact_email");

    table.string("option");

    table.string("faq_list");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("site_needs");
};
