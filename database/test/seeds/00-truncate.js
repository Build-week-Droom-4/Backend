// delete all records from initial set of tables
// delete in reverse order of how tables are populated

exports.seed = async knex => {
  await knex('marks').truncate();
  await knex('postings').truncate();
  await knex('profiles').truncate();
  await knex('users').truncate();
};
