// routes/post.js
const express = require('express');
const router = express.Router(); 

//  GET sur /api/post/
router.get('/', (req, res) => {
    res.send('Liste des articles');
});

//  POST sur /api/post/
router.post('/', (req, res) => {
    res.send('Créer un article');
});

module.exports = router;
