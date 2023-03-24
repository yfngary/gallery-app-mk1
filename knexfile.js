const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './backend/data/migrations' },
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) }
  }
  
  module.exports = {
    development: {
      ...sharedConfig,
      connection: { filename: './backend/data/gallerydb.db3' }
    },
  };