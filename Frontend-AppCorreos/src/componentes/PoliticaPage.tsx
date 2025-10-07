export default function PoliticaPage() {

    return(
            <div style={{maxWidth: "800px", margin: "auto", marginTop:"100px", fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333"}}>
                <h2>🛡️ Política de Privacidad — Aplicación de Envío de Correos (Demo)</h2>
                <p>Esta versión de la aplicación esta pensada para uso exclusivamente demostrativo como parte del portafolio profesional. No está destinada al uso público general ni al procesamiento real de datos personales.</p>

                <h3>🎯 1. Finalidad de la aplicación</h3>
                <p>La app permite simular el envío de correos electrónicos, incluyendo la selección de archivos locales, ingreso de direcciones de correo, asunto y mensaje. Su único propósito es mostrar habilidades técnicas en desarrollo web.</p>

                <h3>🔍 2. Tratamiento de datos</h3>
                <ul>
                    <li><strong>No se almacenan datos:</strong> La información ingresada (correos, archivos, mensajes) no se guarda en ningún servidor ni base de datos.</li>
                    <li><strong>Procesamiento local:</strong> Todos los datos se manejan únicamente en el navegador del usuario durante la sesión.</li>
                    <li><strong>Uso de terceros:</strong> Para el envío de correos, se utiliza el servicio externo SendGrid, que procesa la información de forma segura y conforme a sus propias políticas de privacidad.</li>
                </ul>

                <h3>🔐 3. Seguridad</h3>
                <p>Aunque esta app no realiza almacenamiento ni transmisión de datos, se recomienda no ingresar información sensible o confidencial durante su uso.</p>

                <h3>🚫 4. Uso limitado</h3>
                <p>Esta versión de la aplicación está destinada únicamente a ser revisada por reclutadores o interesados en el perfil profesional del desarrollador. No debe utilizarse para fines reales de comunicación o envío de información.</p>

                <h3>📬 5. Contacto</h3>
                <p>Para cualquier duda relacionada con esta aplicación o el portafolio, puedes contactar a Pedro a través de <a href="mailto:pedrochacon9621@gmail.com">pedrochacon9621@gmail.com</a>.</p>
            </div>
    )


    
}