import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import PlayerCard from './components/PlayerCard';
import SavedSearches from './components/SavedSearches'; // Importa el componente

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda actual

    // Función para guardar la búsqueda actual
    const handleSaveSearch = async () => {
        if (searchResults.length > 0) {
            try {
                const response = await axios.post('http://localhost:3001/api/search', {
                    search_query: searchTerm,
                    result_data: searchResults,
                    total_results: searchResults.length
                });
                alert('Búsqueda guardada con éxito!');
            } catch (error) {
                console.error('Error intentando guardar:', error);
                alert('Error al guardar la búsqueda');
            }
        } else {
            alert('No hay resultados para guardar');
        }
    };

    return (
        <div className="container">
            <h1>Búsqueda de Jugadores de Fútbol</h1>
            <SearchForm setSearchResults={setSearchResults} setSearchTerm={setSearchTerm} onSaveSearch={handleSaveSearch} />
            <div className="d-flex flex-wrap justify-content-center">
                {searchResults.map(player => (
                    <PlayerCard key={player.idPlayer} player={player} />
                ))}
            </div>
            <SavedSearches /> {/* Añado el componente SavedSearches para mostrar las búsquedas guardadas */}
        </div>
    );
}

export default App;
