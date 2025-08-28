const api = "http://localhost:3000"


export const enviarFileBackend = async (files:FormData)=>{
    
    
    await fetch(`${api}/enviar`, {
        method: "POST",
        body: files
    });
   
}