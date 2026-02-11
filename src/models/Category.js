// routes/post.js
const express = require('express');
const router = express.Router(); 

//  GET  /api/topic/
router.get('/', (req, res) => {
    res.send('Liste des sujets');
});

// POST  /api/topic/
router.post('/', (req, res) => {
    res.send('Créer un sujet');
});

// exportation du routeur
module.exports = router; 
