// Importar Sequelize
const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('football_app', 'root', 'GHIbln209-', {
    host: 'localhost',
    dialect: 'mysql'
});

// Verificar la conexión
sequelize.authenticate()
    .then(() => console.log('Conexión establecida con éxito.'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

// Exportar la instancia de sequelize
module.exports = sequelize;
