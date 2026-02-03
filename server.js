import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;

// Définir EJS comme moteur de rendu de vues 
app.set('view engine', 'ejs');
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

// Servir des fichiers statiques dans Express
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`l application sera lancé sur le port ${port}`)
})
