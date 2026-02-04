import express from 'express';
const router = express.Router(); 

// GET sur /api/users/
router.get('/', (req, res) => {
    res.send('Liste des utilisateurs');
});

// POST sur /api/users/
router.post('/', (req, res) => {
    res.send('Créer un utilisateur');
});

export default router; 
