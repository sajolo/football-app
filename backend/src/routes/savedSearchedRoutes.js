const express = require('express');
const router = express.Router();
const Search = require('../models/Search'); 

// Ruta para obtener todas las búsquedas guardadas
router.get('/', async (req, res) => {
    try {
        const searches = await Search.findAll();  // Método findAll() de Sequelize para obtener todas las búsquedas
        res.json(searches);
    } catch (error) {
        console.error('Error fetching saved searches:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.toString() });
    }
});

module.exports = router;
