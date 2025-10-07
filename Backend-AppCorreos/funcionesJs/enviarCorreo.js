const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const correosConfig = (req, res) => {
  const correos = JSON.parse(req.body.correo);
  const asuntos = JSON.parse(req.body.asunto);
  const mensajes = JSON.parse(req.body.mensaje);
  const files = req.files;

  console.log(files);

  const attachments = files.map(file => ({
    filename: file.originalname,
    path: file.path
  }));

  const transporter = nodemailer.createTransport(sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  }));

  correos.forEach((correo, index) => {
    const mailOptions = {
      from: process.env.correo, // debe coincidir con el remitente verificado
      to: correo,
      subject: asuntos[index],
      text: mensajes[index],
      attachments: [attachments[index]] // que sea un array
    };

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
