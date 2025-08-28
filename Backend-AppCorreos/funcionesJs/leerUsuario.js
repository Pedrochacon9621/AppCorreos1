const fs = require('fs');
const path = require('path');
const os = require('os');
// Usa __dirname directamente en lugar de fileURLToPath y dirname

// Define la ruta a la carpeta "Mis Documentos"
const documentosPath = path.join(os.homedir(), 'Documents', 'appcorreos');
//const pathTexto = path.join(__dirname, '../../credenciales.txt');
// Define la ruta completa al archivo de texto
const pathTexto = path.join(documentosPath, 'credenciales.txt');


function mostrarTexto() {

   // Verifica si la carpeta existe, si no, créala
   if (!fs.existsSync(documentosPath)) {
    fs.mkdirSync(documentosPath, { recursive: true });
}

     // Verifica si el archivo existe, si no, créalo vacío
     if (!fs.existsSync(pathTexto)) {
        fs.writeFileSync(pathTexto, ''); // Crea un archivo vacío si no existe
    }
    const texto = fs.readFileSync(pathTexto, "utf-8");
    return texto;    
}

function limpiarUploads(directorio) {
    fs.readdir(directorio, (err, files) => {
        if (err) throw err;
    
        for (const file of files) {
          fs.unlink(path.join(directorio, file), err => {
            if (err) throw err;
          });
        }
      });
}

module.exports = { mostrarTexto, limpiarUploads };
