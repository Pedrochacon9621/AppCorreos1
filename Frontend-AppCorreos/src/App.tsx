import BusquedaArchivo from "./componentes/BusquedaArchivo"
import "./css/generales.css"
import { useEffect } from "react";
function App() {
  
useEffect(() => {
    alert("¡Bienvenido a la aplicación de correos!");
  }, []);
  

  return (
    <>
      <BusquedaArchivo/>
    </>
  )
}

export default App
