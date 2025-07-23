// Temporary in-memory list of users

const pool = require('../db');

// Create a new user and add to the users array
exports.createUser = async (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ error: 'Name, email, and age are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
      [name, email, parseInt(age)]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create user in database' });
  }
};



// Controller to handle GET /users
//  async Lets a function use await inside it.  await-  Waits for a promise to finish (like a DB query)


exports.getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch users from database' });
  }
};

// Controller to handle GET /users/:id
exports.getUserById = async (req, res) => {
  const userId = parseInt(req.params.id); // Get ID from URL

  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(result.rows[0]); // Return just the user object
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch user from database' });
  }
};


// Controller to handle PUT /users/:id
exports.updateUser = async (req, res) => {
  const userId = parseInt(req.params.id); // Get user ID from URL

  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const { name, email, age } = req.body;

  // Basic validation
  if (!name || !email || !age) {
    return res.status(400).json({ error: 'Name, email, and age are required' });
  }

  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
      [name, email, age, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(result.rows[0]); // Send updated user
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update user in database' });
  }
};

// DELETE /users/:id - delete user by ID
exports.deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully', deletedUser: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
