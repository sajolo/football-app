import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SavedSearches() {
    const [savedSearches, setSavedSearches] = useState([]);

    useEffect(() => {
        const fetchSavedSearches = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/saved_searches');
                setSavedSearches(response.data);
            } catch (error) {
                console.error('Error fetching saved searches:', error);
            }
        };

        fetchSavedSearches();
    }, []);

    return (
        <div className="container mt-3">
            <h2>Búsquedas Guardadas</h2>
            {savedSearches.length > 0 ? savedSearches.map((search, index) => (
                <div key={index} className="card mb-2">
                    <div className="card-body">
                        <h5 className="card-title">Búsqueda: {search.search_query}</h5>
                        <p>Total de resultados: {search.total_results}</p>
                        <p>Jugadores buscados:</p>
                        <ul>
                            {search.result_data.map((player, idx) => (
                                <li key={idx}>{player.strPlayer}</li> // Asumiendo que 'strPlayer' es la propiedad que contiene el nombre del jugador
                            ))}
                        </ul>
                        <p>Fecha de búsqueda: {new Date(search.search_date).toLocaleDateString()}</p>
                    </div>
                </div>
            )) : <p>No se encontraron búsquedas guardadas.</p>}
        </div>
    );
}

export default SavedSearches;

