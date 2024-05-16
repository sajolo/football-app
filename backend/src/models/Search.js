// Importar Sequelize
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definir el modelo 'Search' para la tabla 'searches'
const Search = sequelize.define('Search', {
    search_query: {
        type: DataTypes.STRING,
        allowNull: false
    },
    result_data: {
        type: DataTypes.JSON
    },
    search_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    total_results: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'searches',
    timestamps: false
});

// Exportar el modelo
module.exports = Search;
