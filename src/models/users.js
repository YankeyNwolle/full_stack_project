import pool from '../config/database.js';

export const GetAllUsersblog = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
}

export const GetUsersByIdblog = async (id) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
}

export const UpdateUsersblog = async (id, username, email) => {
    const result = await pool.query('UPDATE users SET id = $1, username = $2 WHERE email = $3 RETURNING *', [id, username, email]);
    return result.rows[0];
}

export const DeleteUsersblog = async (id) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

export const CreateUsersblog = async (username, password, email) => {
    const result = await pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *', [username, password, email]);
    return result.rows[0];
}

