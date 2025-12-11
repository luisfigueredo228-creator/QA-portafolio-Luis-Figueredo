const express = require('express');
const app = express();

app.use(express.json());

// Importar rutas
const usersRoutes = require('./routes/users');
const tasksRoutes = require('./routes/tasks');

// Rutas
app.get('/', (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

// Usar las rutas correctas
app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);

// 1. Opcional: Define la función de iniciar el servidor
const startServer = () => {
    app.listen(3000, () => {
        console.log("Servidor corriendo en http://localhost:3000");
    });
};

// 2. CRÍTICO: Si el módulo es ejecutado directamente (npm start), inicia el servidor.
// Si es importado por Jest/Supertest, NO lo inicia, solo lo exporta.
if (require.main === module) {
    startServer();
}

// 3. EXPORTAMOS la instancia de la aplicación (el objeto 'app')
module.exports = app;