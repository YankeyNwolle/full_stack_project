import pool from '../config/database.js';

// recupère tous les post des utilisateurs de la base de données
export const GetAllUPostblog = async () => {
   const result = await pool.query('SELECT * FROM posts');
   return result.rows;
}

// recupère un par son id
export const GetPostByIdblog = async (id) => {
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    return result.rows[0]
}

// met à jour un post par son id
export const UpdatePostblog = async (id, title, image, content) => {
    const result = await pool.query('UPDATE posts SET title = $1, image = $2, content = $3 WHERE id = $4 RETURNING *', [title, image, content, id]);
    return result.rows[0];
}

// supprime un post par son id
export const DeletePostblog = async (id) => {
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

// crée un nouveau post
export const CreatePostblog = async (title, image, content) => {
    const result = await pool.query('INSERT INTO posts (title, image, content) VALUES ($1, $2, $3) RETURNING *', [title, image, content]);
    return result.rows[0];
}
 
