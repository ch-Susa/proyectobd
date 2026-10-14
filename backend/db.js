const mysql = require("mysql2");

// Configuración de la conexión a MySQL
const conexion = mysql.createConnection({
    host: "localhost",      // Servidor local
    user: "root",           // Usuario de MySQL (Por defecto en Xampp)
    database: "tienda"      // Nombre de la BD
});

// Comprobar si la conexión fue exitosa

conexion.connect((error) => {
    if (error){
        console.error("Error al conectar con MySQL: ", error);
        return;
    }
    console.log("Conexión exitosa con MySQL");
});

// Exportar la conexión para reutilizarla en las rutas del servidor
module.exports = conexion;