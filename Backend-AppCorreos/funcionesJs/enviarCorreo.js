const { Resend } = require('resend');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Configurar Resend con tu API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// Multer para manejar archivos adjuntos
const upload = multer({ dest: 'uploads/' });

const correosConfig = async (req, res) => {
  try {
    const correos = JSON.parse(req.body.correo);
    const asuntos = JSON.parse(req.body.asunto);
    const mensajes = JSON.parse(req.body.mensaje);
    const files = req.files;

    // Convertir archivos a base64 para Resend
    const attachments = files.map(file => ({
      filename: file.originalname,
      content: fs.readFileSync(path.resolve(file.path)).toString('base64'),
      type: file.mimetype
    }));

    // Enviar correos uno por uno
    const envios = correos.map((correo, index) => {
      return resend.emails.send({
        from: process.env.RESEND_FROM, // puede ser tu Gmail, Outlook, etc.
        to: correo,
        subject: asuntos[index],
        text: mensajes[index],
        attachments: attachments[index] ? [attachments[index]] : []
      });
    });

    await Promise.all(envios);
    res.send("Correos enviados correctamente con Resend");
  } catch (error) {
    console.error("Error al enviar correos:", error);
    res.status(500).send("Error al enviar correos");
  }
};

module.exports = { correosConfig, upload };
