// test de la base de données postgresql

import pkg from 'pg';
import dotenv from 'dotenv';

// charge le fichier .env
dotenv.config();

// pool permet la connection à la base de données
const { Pool } = pkg;

// Créer une connexion
const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORTDB,
  database: process.env.DB,
});

console.log('Test de connexion à PostgreSQL...\n');

// Tester la connexion
pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.log('ERREUR:');
    console.log('   ' + err.message);
  } else {
    console.log('SUCCÈS!');
    console.log('   Heure du serveur:', result.rows[0].now);
  }
  
  pool.end(); // Fermer la connexion
});
