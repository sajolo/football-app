import React, { useState } from 'react';
import axios from 'axios';

function SearchForm({ setSearchResults, setSearchTerm, onSaveSearch }) {
    const [searchTermLocal, setSearchTermLocal] = useState('');

    // Manejo del evento de búsqueda al hacer click en el botón Buscar
    const handleSearch = async () => {
        try {
            setSearchTerm(searchTermLocal); // Actualiza el estado searchTerm en el componente App
            const response = await axios.get(`http://localhost:3001/api/search/${searchTermLocal}`); // Utiliza searchTermLocal para la petición
            setSearchResults(response.data); // Actualiza los resultados de la búsqueda
        } catch (error) {
            console.error('Error fetching players:', error);
        }
    };

    return (
        <div className="search-bar d-flex justify-content-center">
            <input
                type="text"
                className="form-control"
                placeholder="Ingrese nombre del jugador"
                value={searchTermLocal} // Utiliza searchTermLocal como el valor del input
                onChange={(e) => setSearchTermLocal(e.target.value)} // Actualiza searchTermLocal al cambiar el input
            />
            <button className="btn btn-success m-1" onClick={handleSearch}>Buscar</button>
            <button className="btn btn-primary m-1" onClick={onSaveSearch}>Guardar</button>
        </div>
    );
}

export default SearchForm;
