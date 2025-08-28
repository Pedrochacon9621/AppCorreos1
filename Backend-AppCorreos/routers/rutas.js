const { Router } = require('express');
const { correosConfig, upload } = require('../funcionesJs/enviarCorreo');


const router = Router();
router.post("/enviar", upload.array('files'), correosConfig);

// Exporta el router usando module.exports
module.exports = router;
