// connexion à la base de données
import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;
// charger les variables d'environnement à partir du fichier .env
dotenv.config();


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,  
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORTDB,
});

pool.on("connect", () => {
    console.log("connexion à la base de données réussie");
});

export default pool;