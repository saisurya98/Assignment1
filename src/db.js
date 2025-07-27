// You're importing the Pool class from the pg (node-postgres) library.

// Pool allows us to create a connection pool, which manages multiple clients to the database efficiently 
// (instead of opening/closing connections manually).


const { Pool } = require('pg');

// This creates a new instance of a connection pool.
// You pass in your database credentials as an object.

const pool = new Pool({
  user: 'postgres',
  host: 'host.docker.internal', // 👈 important change
  database: 'postgres',
  password: 'Surya@123',
  port: 5432, // default PostgreSQL port
});

module.exports = pool;
