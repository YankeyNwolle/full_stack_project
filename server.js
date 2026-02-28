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
app.use(cors()); 

// Définir EJS comme moteur de rendu de vues 
app.set('view engine', 'ejs');

// Servir des fichiers statiques dans Express
app.use(express.static('public'));  


// routes
app.get('/',(req, res) => {
  res.render('home');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});


// test de la connection à la base de données
app.get('/test-db.js', async (req, res) => {
  const  result = await pool.query('SELECT NOW()');
  res.send(`le nom de la base de données est : ${result.rows[0].now}`);
});


app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const search = await pool.query("SELECT * FROM users WHERE username = $1 and password = $2",
    [username, password]
  );

  // recherche si l'utilisateur n'est pas inscrit
  if (search.rows.length == 0) {
    console.log("utilisateur pas inscrit dans la base de données");
  } 
  else {
    console.log("connexion réussi");
    return res.redirect("/");
  }
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const result = await pool.query(
    "INSERT INTO users (username,password) VALUES($1, $2)",
    [username, password]
  );
  return res.redirect("/");
});


//  server running
app.listen(port, () => {
  console.log(`l application sera lancé sur le port ${port}`)
})
