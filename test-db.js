const pool = require('./src/db'); // 👈 adjust path to point to db.js

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ DB Connection Error:', err);
  } else {
    console.log('✅ DB Connected at:', res.rows[0]);
  }
  pool.end();
});
