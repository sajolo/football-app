// Importar los módulos necesarios
const express = require('express');
const cors = require('cors');

// Importar las rutas
const searchRoutes = require('./routes/searchRoutes');
const savedSearchedRoutes = require('./routes/savedSearchedRoutes')

// Inicializar la aplicación Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors());

// Usar las rutas importadas
app.use('/api/search', searchRoutes);
app.use('/api/saved_searches', savedSearchedRoutes);

// Configurar el puerto y lanzar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
