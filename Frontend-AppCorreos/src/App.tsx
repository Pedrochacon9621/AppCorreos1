import BusquedaArchivo from "./componentes/BusquedaArchivo";
import PoliticaPage from "./componentes/PoliticaPage";
import "./css/generales.css"
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  
useEffect(() => {
    alert("Esta aplicación es una versión de prueba con fines demostrativos. No realiza almacenamiento ni procesamiento de datos personales. Toda la información ingresada —como correos, archivos o mensajes— se gestiona únicamente en el navegador del usuario y no se transmite a servidores externos. No está diseñada para uso comercial ni para el envío real de correos electrónicos. Se recomienda no ingresar información sensible durante su uso. Puede consulta la política de privacidad completa en el enlace");
  }, []);
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BusquedaArchivo/>}/>
          <Route path="/politica" element={<PoliticaPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
