import pool from '../config/database.js';

// recupère tous les categories des utilisateurs de la base de données
export const GetAllCategoryblog = async () => {
    const result = await pool.query('SELECT * FROM categories');
    return result.rows;
}

// recupère une catégorie par son id
export const GetCategoryByIdblog = async (id) => {
    const result = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
    return result.rows[0];
}

// met à jour une catégorie par son id
export const UpdateCategoryblog = async (id, name) => {
    const result = await pool.query('UPDATE categories SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
    return result.rows[0];
}

// supprime une catégorie par son id
export const DeleteCategoryblog = async (id) => {
    const result = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

// crée une nouvelle catégorie
export const CreateCategoryblog = async (name) => {
    const result = await pool.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
    return result.rows[0];
}
 

