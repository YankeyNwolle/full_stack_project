// importation du pool de connexion à la base de données 
import pool from '../config/database.js';

// recupère tous les utilisateurs de la base de données
export const GetAllUsersblog = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
}

// recupère un utilisateur par son id
export const GetUsersByIdblog = async (id) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
}

// met à jour un utilisateur par son id
export const UpdateUsersblog = async (id, username, email) => {
    const result = await pool.query('UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *', [username, username, id]);
    return result.rows[0];
}

// supprime un utilisateur par son id
export const DeleteUsersblog = async (id) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

// crée un nouvel utilisateur
export const CreateUsersblog = async (username, password, email) => {
    const result = await pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *', [username, password, email]);
    return result.rows[0];
}

