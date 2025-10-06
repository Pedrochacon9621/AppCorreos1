/*const api = "http://localhost:3000"*/
//const api = "https://backend-appcorreos1.onrender.com" //produccion
const api="https://appcorreos1-production.up.railway.app"
export const enviarFileBackend = async (files:FormData)=>{
    
    
    await fetch(`${api}/enviar`, {
        method: "POST",
        body: files
    });
   
}