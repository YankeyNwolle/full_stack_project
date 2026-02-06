// routes/post.js
const express = require('express');
const router = express.Router(); // 1. Création du routeur

// Définition d'une route GET sur /api/comments/
router.get('/', (req, res) => {
    res.send('Liste des commentaires');
});

// Définition d'une route POST sur /api/comments/
router.post('/', (req, res) => {
    res.send('Créer un commentaire');
});

module.exports = router; // 2. Exportation du routeur
