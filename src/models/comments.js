import pool from '../config/database.js';


// recupère tous les commentaires des utilisateur de la base de données
export const GetAllCommentblog = async () => {
    const result = await pool.query('SELECT * FROM comments');
    return result.rows;
}

// recupère un commentaire par son id
export const GetCommentByIdblog = async (id) => {
    const result = await pool.query('SELECT * FROM comments WHERE id = $1', [id]);
    return result.rows[0];
}

// met à jour un commentaire par son id
export const UpdateCommentblog = async (id, content) => {
    const result = await pool.query('UPDATE comments SET content = $1 WHERE id = $2 RETURNING *', [content, id]);
    return result.rows[0];
}

// supprime un commentaire par son id
export const DeleteCommentblog = async (id) => {
    const result = await pool.query('DELETE FROM comments WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

// crée un nouveau commentaire
export const CreateCommentblog = async (content) => {
    const result = await pool.query('INSERT INTO comments (content) VALUES ($1) RETURNING *', [content]);
    return result.rows[0];
}
 
