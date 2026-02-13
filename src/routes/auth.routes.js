// fichier de route pour les opérations d'authentification
import express from "express";
import router from "./src/routes/auth.routes.js";
import pool from "./src/config/database.js";
    

router.post("/register", authController.register);

module.exports = router;
