const express = require('express');
require('dotenv').config(); // PARA VARIABLES DE ENTORNO EN VERSION WEB
const router = require('./routers/rutas');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3000;

/*const pathUploads = path.resolve(__dirname, 'uploads');
const {limpiarUploads} = require("./funcionesJs/leerUsuario")
*/
/*import express from "express";
import router from "./routers/rutas.js"
import cors from "cors"
*/

const app = express();
    
const corsOptions = {

    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true // Si necesitas enviar cookies o autenticación

}




app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req, res)=>{
    res.send("HELLO WORLD");
    
})


// Ejecutar limpiarUploads después de 1 segundo
/*setTimeout(() => {
    limpiarUploads(pathUploads);
  }, 1000);
*/

  app.use(router)

app.listen(PORT, ()=>{
    
    console.log(`servidor funcionando en puerto ${PORT}`);
    
    
})

// Al final del archivo, agrega este bloque para mantener la consola abierta
