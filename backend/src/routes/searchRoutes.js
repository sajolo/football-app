const express = require('express');
const axios = require('axios');
const router = express.Router();
const Search = require('../models/Search');

// Ruta para buscar jugadores por nombre
router.get('/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${name}`);

        // Verificar que hay datos y que el arreglo player contiene elementos
        if (!response.data.player || response.data.player.length === 0) {
            return res.status(404).json({ message: "No players found" });
        }

        const players = response.data.player.filter(p => p.strSport === 'Soccer').slice(0, 5);
        res.json(players);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.toString() });
    }
});

// Ruta para guardar una búsqueda
router.post('/', async (req, res) => {
    try {
        const { search_query, result_data, total_results } = req.body;
        const newSearch = await Search.create({
            search_query,
            result_data,
            total_results
        });
        res.status(201).json(newSearch);
    } catch (error) {
        console.error('Error saving search:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.toString() });
    }
});

module.exports = router;
