# Aplicación de Búsqueda de Jugadores de Fútbol

## Descripción
Esta aplicación web permite a los usuarios buscar jugadores de fútbol usando una API pública y guardar las búsquedas realizadas. La interfaz permite buscar jugadores por nombre, mostrar los datos de los jugadores buscados y la equipación actual del equipo de cada uno de ellos. Las búsquedas se pueden guardar en una base de datos MySQL para consultas futuras.

En la base de datos he creado una tabla llamada **searches** la cual tiene las columnas:
    - id: Identificador único de cada registro de búsqueda guardado.
    - search_query: Guarda la cadena de texto que el usuario introdujo al realizar la búsqueda.
    - result_data: Guarda un JSON con los jugadores que devolvió la búsqueda realizada.
    - search_date: Registra la fecha y hora de la búsqueda realizada.
    - total_results: Devuelve un número que es la cantidad de jugadores que devolvió la búsqueda realizada (máximo 5).

## Configuración de la Base de Datos

Para configurar la base de datos necesaria para este proyecto, seguir estos pasos:

1. **Crear la Base de Datos**:
   - Ejecutar el siguiente comando SQL para crear la base de datos:
     ```sql
     CREATE DATABASE football_app;
     ```

2. **Importar la Estructura y los Datos**:
   - Ubicar el archivo `football_app_searches.sql` en el directorio raíz del proyecto.
   - Importar este archivo al sistema de gestión de bases de datos.
   - Reemplazar `username` con el nombre de usuario de MySQL.

   Para hacerlo desde la terminal de MySQl:

   ```bash
     mysql -u tu_usuario -p football_app < ruta/a/football_app_searches.sql
     ```

3. **Configurar la Conexión**:
   - Será necesario actualizar el archivo `backend/src/config/database.js` con tus credenciales locales de MySQL.


## Estructura del Proyecto:

### Backend
El backend está construido con Node.js y Express. Se conecta a una base de datos MySQL para guardar y recuperar búsquedas de jugadores.

- **`/backend/src/config`**: Contiene archivos de configuración de la base de datos.
  - `database.js`: Configura la conexión con la base de datos MySQL.
- **`/backend/src/models`**: Define los modelos de Sequelize utilizados para la interacción con la base de datos.
  - `Search.js`: Define el modelo para las búsquedas guardadas.
- **`/backend/src/routes`**:
  - `searchRoutes.js`: Define las rutas para buscar jugadores y guardar búsquedas.
  - `savedSearchedRoutes.js`: Rutas para recuperar las búsquedas guardadas.
- **`server.js`**: Archivo principal del servidor que configura Express y las rutas.

### Frontend
El frontend utiliza React para renderizar la interfaz de usuario e interactuar con el backend.

- **`/frontend/public`**: Contiene el `index.html` y varios recursos estáticos.
  - `favicon.ico`, `logo192.png`, `logo512.png`: Iconos y logos de la aplicación.
- **`/frontend/src`**:
  - **`components`**:
    - `PlayerCard.js`: Componente que muestra la información del jugador y su equipación.
    - `SavedSearches.js`: Componente para mostrar las búsquedas guardadas.
    - `SearchForm.js`: Formulario para buscar jugadores y guardar búsquedas.
  - `App.js`: Componente raíz que encapsula todos los componentes principales.
  - `index.js`: Punto de entrada de React que monta `App` en el DOM.

### Archivos de Configuración y Estilo
- `App.css`: Estilos globales para el proyecto.
- `PlayerCard.css`: Estilos específicos para el componente `PlayerCard`.
- `package.json`: Define dependencias y scripts para el backend y el frontend.

## Configuración y Ejecución
Para ejecutar el proyecto, es necesario tener Node.js y npm instalados. Primero, instalar las dependencias ejecutando `npm install` tanto en el directorio `backend` como en `frontend`. Configurar posteriormente la conexión a la base de datos en `backend/src/config/database.js`.

Para iniciar el servidor backend, usar `npm start` en el directorio `backend`. Para el frontend, ejecuta `npm start` en el directorio `frontend`. MySQL debe estar corriendo y accesible.

## Herramientas utilizadas
Mis conocimientos sobre el stack utilizado en el desarrollo de esta prueba técnica son limitados, por lo que en algunas ocasiones me he apoyado en la consulta de ChatGPT, como para usar el módulo de Node llamado Sequelize (el cual no conocía) para interactuar con la base de datos, o como guía para configurar y estructurar bien las rutas en el backend.
