const { pool } = require('../db/db.js');

module.exports = {
  getUser: async (query, callback) => {
    try {
      const user = await pool.query(
        `SELECT * FROM users
        WHERE firebase_id='${query.id}'`
      )
      if (user.rows.length === 0) {
        callback(null, {})
      } else {
        callback(null, user.rows)
      }
    } catch (error) {
      callback(error, null)
    }
  },
  createUser: async (query, callback) => {
    try {
      pool.query(
        `INSERT INTO users(
          firebase_id,
          email,
          user_type
        )
        VALUES (
          '${query.id}',
          '${query.email}',
          '${query.userType}'
        )`
      ).then(result => {
        callback(null, result)
      })
    } catch (error) {
      callback(error, null)
    }
  }
}