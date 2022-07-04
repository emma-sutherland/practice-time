/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('videos').del()
  await knex('videos').insert([
    {id: 1, title: 'Ballet Grade 4 Free Movement Solo', video_link: 'https://vimeo.com/719665196/13c952ff0f', genre_code: 'BAL', practice_type_id: 6 },
    {id: 2, title: 'Jazz Grade 4 Combo Me Two', video_link: 'https://vimeo.com/676947571/e400dd9bc4', genre_code: 'JAZ', practice_type_id: 5 },
    {id: 3, title: 'Team Assemblé Happy', video_link: 'https://vimeo.com/716920951/d33e2d8526', genre_code: 'COM', practice_type_id: 7 },
  ]);
};


// table.increments('id').primary()
// table.string ('title')
// table.string ('video_link')
// table.string ('genre_code')
// table.integer('practice_type_id')