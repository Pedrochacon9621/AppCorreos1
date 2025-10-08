import BusquedaArchivo from "./componentes/BusquedaArchivo";
import PoliticaPage from "./componentes/PoliticaPage";
import "./css/generales.css"
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  
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
