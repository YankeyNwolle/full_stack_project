import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import session from "express-session";
import flash from "connect-flash";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import pool from "./src/config/database.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { hash } from "crypto";


// charge les variables d'environement depuis .env
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;
const salting = 10;

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'votre_secret_ici',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

// Définir EJS comme moteur de rendu de vues 
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success');
  res.locals.error_msg = req.flash('error');
  next();
});


// Servir des fichiers statiques dans Express
app.use(express.static('public'));


// routes
app.get('/', (req, res) => {
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
  const result = await pool.query('SELECT NOW()');
  res.send(`le nom de la base de données est : ${result.rows[0].now}`);
});


app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const search = await pool.query(
      "SELECT * FROM users WHERE username = $1 and password = $2",
      [username, password]
    );

    if (search.rows.length == 0) {
      req.flash('error', 'Nom d\'utilisateur ou mot de passe incorrect.');
      return res.redirect("/login");
    } else {
      req.flash('success', 'Connexion réussie !');
      return res.redirect("/");
    }
  } catch (err) {
    console.error("Erreur lors de la connexion :", err);
    req.flash('error', 'Erreur serveur, réessayez plus tard.');
    return res.redirect("/login");
  }
});
app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    // pasword hashing
    bcrypt.hash(password, salting, async (err, hash) => {
      if (err) {
        console.log("erreur pour hashing le mot de passe!");
      } else {
        const result = await pool.query(
          "INSERT INTO users (username,password) VALUES($1, $2)",
          [username, hash]
        );
      }
    })

    req.flash('success', 'Inscription réussie 🎉​!');
    return res.redirect("/");
  } catch (err) {
    console.log("erreur lors de l'inscription :", err);
    req.flash('error', 'Erreur lors de l\'inscription. Ce nom d\'utilisateur existe peut-être déjà.');
    return res.redirect("/register");
  }
});

//  server running
app.listen(port, () => {
  console.log(`l application sera lancé sur le port ${port}`)
})
