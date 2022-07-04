/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('genres').del()
  await knex('genres').insert([
    {code: 'BAL', name: 'Ballet'},
    {code: 'JAZ', name: 'Jazz'},
    {code: 'CON', name: 'Contemporary'},
    {code: 'COM', name: 'Competition'},
  ]);
};

// table.string('code').primary()
// table.string ('name')