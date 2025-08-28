const nodemailer = require('nodemailer');
const multer = require('multer');
const { mostrarTexto } = require('./leerUsuario');

const datoUsuario = mostrarTexto();
const datoUsuarioJson = JSON.parse(datoUsuario);

const upload = multer({ dest: 'uploads/' });
/*
const user = datoUsuarioJson.correo;
const password = datoUsuarioJson.contraseña;
*/

//user y pass para version web:
const user = process.env.correo;
const password = process.env.correoPass;


const correosConfig = (req, res) => {
  // Parsear los JSON strings de vuelta a arreglos
  const correos = JSON.parse(req.body.correo);
  const asuntos = JSON.parse(req.body.asunto);
  const mensajes = JSON.parse(req.body.mensaje);

  const files = req.files;
  console.log(files);

  const attachments = files.map(file => ({
    filename: file.originalname,
    path: file.path
  }));


  /* --CON MICROSOFT--
  let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true para 465, false para otros puertos
    auth: {
      user: user, // Reemplaza con tu correo
      pass: password // Reemplaza con tu contraseña de aplicación
    }
  });*/

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: user, // Reemplaza con tu correo
      pass: password // Reemplaza con tu contraseña
    }
  });

  correos.forEach((correo, index) => {
    const mailOptions = {
      from: user,
      to: correo,
      subject: asuntos[index],
      text: mensajes[index],
      attachments: attachments[index]
    };
    /* --CON MICROSOFT--
    correos.forEach((correo, index) => {
    const mailOptions = {
      from: 'ch_pedro96@hotmail.com',
      to: correo,
      subject: asuntos[index],
      text: mensajes[index],
      attachments: attachments[index]
    };*/

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send('Error al enviar el correo');
      }
      console.log("Email sent: " + info.response);
      res.send("enviado");
    });
  });
};

module.exports = { correosConfig, upload };