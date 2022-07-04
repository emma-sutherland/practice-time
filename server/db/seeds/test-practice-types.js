/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('practice_type').del()
  await knex('practice_type').insert([
    {id: 1, name: 'Warmup'},
    {id: 2, name: 'Barre'},
    {id: 3, name: 'Centre'},
    {id: 4, name: 'Allegro'},
    {id: 5, name: 'Combinations'},
    {id: 6, name: 'Class Dances'},
    {id: 7, name: 'Competition Dances'},
  ]);
};


// table.increments('id').primary()
// table.string ('name')