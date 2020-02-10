// initial marks

exports.seed = async knex => {
  await knex('marks').insert([
    {
      user_id: 2,
      profile_id: 1,
      posting_id: 1,
      mark: 1,
    },
    {
      user_id: 4,
      profile_id: 2,
      posting_id: 2,
      mark: 1,
    },
    {
      user_id: 3,
      profile_id: 1,
      posting_id: 1,
      mark: -1,
    },
    {
      user_id: 5,
      profile_id: 2,
      posting_id: 2,
      mark: -1,
    },
  ]);
};
