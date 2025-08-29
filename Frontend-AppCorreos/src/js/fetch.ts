/*const api = "http://localhost:3000"*/
const api = "https://backend-appcorreos1.onrender.com" //produccion

export const enviarFileBackend = async (files:FormData)=>{
    
    
    await fetch(`${api}/enviar`, {
        method: "POST",
        body: files
    });
   
}