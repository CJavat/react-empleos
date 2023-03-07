const nodemailer = require("nodemailer");

//! FUNCIÓN PARA ENVIAR EMAIL Y QUE CONFIRME SU CUENTA
const comprobarCuenta = async (datos) => {
  const { email, nombre, token } = datos;

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "27ef6b0ef54956",
      pass: "072c9072fbbca1",
    },
  });

  fragmentToken = token.split(".");

  // Información del email.
  const info = await transport.sendMail({
    from: "'reactEmpleos' <noreply@reactempleos.com>",
    to: email,
    subject: "reactEmpleos - Comprueba Tu Cuenta",
    text: "Reestablece Tu Password",
    html: `<p>Hola: ${nombre}, comprueba tu password para poder iniciar sesión. </p>
            <p>Sigue el siguiente enlace para confirmar tu cuenta:</p>
            <a href="${process.env.FRONTEND_URL}/auth/comprobar-cuenta/${fragmentToken[0]}&${fragmentToken[1]}&${fragmentToken[2]}">Confirmar Cuenta</a>
            <p>Si tu no solicitaste este email puedes ignorar este mensaje.</p>
    `,
  });
};

//! FUNCIÓN PARA ENVIAR EMAIL CUANDO SE REQUIRE RECUPERAR UN PASSWORD --
const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "27ef6b0ef54956",
      pass: "072c9072fbbca1",
    },
  });

  fragmentToken = token.split(".");

  // Información del email.
  const info = await transport.sendMail({
    from: "'reactEmpleos' <noreply@reactempleos.com>",
    to: email,
    subject: "reactEmpleos - Recupera tu cuenta",
    text: "Reestablece Tu Password",
    html: `<p>Hola: ${nombre}, has solicitado reestablecer tu password </p>
            <p>Sigue el siguiente enlace para generar un nuevo password:</p>
            <a href="${process.env.FRONTEND_URL}/auth/nuevo-password/${fragmentToken[0]}&${fragmentToken[1]}&${fragmentToken[2]}">Reestablecer Password</a>
            <p>Si tu no solicitaste este email puedes ignorar este mensaje.</p>
    `,
  });
};
module.exports = { comprobarCuenta, emailOlvidePassword };
