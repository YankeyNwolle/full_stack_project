import express from "express";
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
app.use(cors()); // Activer CORS pour toutes les routes

// Définir EJS comme moteur de rendu de vues 
app.set('view engine', 'ejs');

// Servir des fichiers statiques dans Express
app.use(express.static('public'));  


app.get('/home',(req, res) => {
  res.render('home');
});

app.get('/login',(req, res) => {
  res.render('login');
});

app.get('/register',(req, res) => {
  res.render('register'); 
});

app.get('/about',(req, res) => {
  res.render('about');
});

app.get('/logout',(req, res) => {
  res.render('logout');
});

// API Routes

// error handling middleware


//  server running
app.listen(port, () => {
  console.log(`l application sera lancé sur le port ${port}`)
})
