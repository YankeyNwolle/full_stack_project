const express = require('express')
const path = require('path')
const app = express()
const port = 4000

// Définir EJS comme moteur de rendu
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 


app.get('/',(req, res) => {
  res.render('home');
});

// Servir des fichiers statiques dans Express
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`l application sera lancé sur le port ${port}`)
})
