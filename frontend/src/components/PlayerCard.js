import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlayerCard.css';

function PlayerCard({ player }) {
    const [equipmentImage, setEquipmentImage] = useState('');

    useEffect(() => {
        // Función para cargar la imagen de equipación del equipo del jugador
        const fetchEquipment = async () => {
            if (player.idTeam) {
                try {
                    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/lookupequipment.php?id=${player.idTeam}`);
                    const equipmentData = response.data.equipment;
                    if (equipmentData && equipmentData.length > 0) {
                        setEquipmentImage(equipmentData[0].strEquipment);
                    }
                } catch (error) {
                    console.error('Error fetching equipment:', error);
                }
            }
        };

        fetchEquipment();
    }, [player.idTeam]); // Dependencia del useEffect para que se ejecute solo cuando cambie idTeam

    const handleSave = async () => {
        try {
            await axios.post('http://localhost:3001/api/search', {
                search_query: player.strPlayer,
                result_data: player,
                total_results: 1
            });
            alert('Búsqueda guardada!');
        } catch (error) {
            console.error('Error saving search:', error);
        }
    };

    return (
        <div className="card player-card m-3" style={{ width: '18rem' }}>
            <img src={player.strThumb} alt={`Imagen de ${player.strPlayer}`} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{player.strPlayer}</h5>
                <p className="card-text">Nacionalidad: {player.strNationality}</p>
                <p className="card-text">Nacimiento: {player.dateBorn}</p>
                <p className="card-text">Equipo Actual: {player.strTeam}</p>
                {equipmentImage && <img src={equipmentImage} alt="Equipación" className="card-img-top mt-2" style={{ width: '50%', margin: '0 auto', display: 'block' }} />}
            </div>
        </div>
    );
}

export default PlayerCard;
