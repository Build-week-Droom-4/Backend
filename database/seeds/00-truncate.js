// delete all records from initial set of tables
// delete in reverse order of how tables are populated

exports.seed = async knex => {
  await knex('marks').del();
  await knex('postings').del();
  await knex('profiles').del();
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE marks_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE postings_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE profiles_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
};
