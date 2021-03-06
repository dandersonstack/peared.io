exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('sessions', function (table) {
      table.increments('id').unsigned().primary();
      table.integer('profileId1').unsigned();
      table.foreign('profileId1').references('id').inTable('profiles');
      table.integer('profileId2').unsigned();
      table.foreign('profileId2').references('id').inTable('profiles');
      table.integer('promptId').unsigned();
      table.foreign('promptId').references('id').inTable('prompts');
      table.string('skeletonCode').nullable();
      table.string('solutionCode').nullable();
      table.dateTime('startedAt').defaultTo(knex.fn.now());
      table.dateTime('endedAt').nullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('sessions')
  ]);
};
