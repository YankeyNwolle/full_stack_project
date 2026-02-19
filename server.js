import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./src/config/database.js";
import { dirname } from "path";
import { fileURLToPath } from "url";


// charge les variables d'environement depuis .env
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Activer CORS pour toutes les routes

// Définir EJS comme moteur de rendu de vues 
app.set('view engine', 'ejs');

// Servir des fichiers statiques dans Express
app.use(express.static('public'));  

// les routes

app.get('/',(req, res) => {
  res.render('home');
});


// API Routes

// error handling middleware

// test de la connection à la base de données
app.get('/test-db.js', async (req, res) => {
  const  result = await pool.query('SELECT NOW()');
  res.send(`le nom de la base de données est : ${result.rows[0].now}`);
});

//  server running
app.listen(port, () => {
  console.log(`l application sera lancé sur le port ${port}`)
})
