import { app, BrowserWindow } from 'electron';
import { join, dirname } from 'path';
import { execFile} from 'child_process';
import { fileURLToPath } from 'url';

import log from 'electron-log';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

log.transports.console.level = 'silly'; // Set log level to 'silly' to capture all logs

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });


  
  mainWindow.loadFile(join(__dirname, 'dist', 'index.html')); // Carga los archivos estáticos de React
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}


app.on('ready', () => {
      
        log.info('App is ready, starting server...');
        const exePath = app.getPath('exe');
        const serverPath = join(dirname(exePath), 'correosBack', 'ServerCorreos.exe');
        log.info('Server path:', serverPath);

        execFile(serverPath, (error, stdout, stderr) => {
          if (error) {
            log.error(`Error starting server: ${error.message}`);
            return;
          }
          if (stderr) {
            log.error(`Server stderr: ${stderr}`);
            return;
          }
          log.info(`Server stdout: ${stdout}`);
        });

        createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});


