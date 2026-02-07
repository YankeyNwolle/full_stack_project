// connexion à la base de données
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,  
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.PORTDB,
});

pool.on("connect", () => {
    console.log("connexion à la base de données réussie");
});

export default pool;