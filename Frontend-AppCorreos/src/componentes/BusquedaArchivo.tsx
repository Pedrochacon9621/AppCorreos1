import { ChangeEvent, useState, ClipboardEvent, FormEvent } from 'react';
import { enviarFileBackend } from '../js/fetch';
import { Link } from "react-router-dom";

export default function BusquedaArchivo() {
      
        //Estado de los Archivos cargados con el input--
        const [archivos, setArchivos] = useState<File[]>([])

      //ESTADO DE CELDAS DE PEGADO
      const [correo, setCorreo] = useState<string[]>([]);
      const [asunto, setAsunto] = useState<string[]>([]);
      const [mensaje, setMensaje] = useState<string[]>([]);

        
      const crearFormData = (event: FormEvent<HTMLFormElement>)=>{
          let formData = new FormData();
          event.preventDefault();
          
          // Agrega los arreglos como JSON strings
          formData.append('correo', JSON.stringify(correo));
          formData.append('asunto', JSON.stringify(asunto));
          formData.append('mensaje', JSON.stringify(mensaje));

            archivos.map((archivo)=>(
              formData.append('files', archivo)
            ))

              // Verificar el contenido de FormData
            for (let pair of formData.entries()) {
              console.log(pair[0] + ': ' + pair[1]);
            }
              enviarFileBackend(formData);    
        }
        
        const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
          const files = event.target.files;
          if (files) {
            console.log('Archivos seleccionados:', files);
            // Aquí puedes manejar la carga de los archivos

            const fileArray = Array.from(files);
            setArchivos(fileArray)
 
            console.log(fileArray);
            
          }
        }
            
        const handlePaste = (e: ClipboardEvent<HTMLInputElement>, dato:string) => {
         
          const pastedText = e.clipboardData.getData('text/plain');
          //console.log(pastedText);
          
          const rows = pastedText.split('\n');
          console.log(rows);

          if (rows.length === 1) {
            // Permite el comportamiento por defecto si no hay saltos de línea
            return;
          }
          
          switch (dato) {
            case 'correo':
              setCorreo(rows);
              break;
            case 'asunto':
              setAsunto(rows);
              break;
            case 'mensaje':
              setMensaje(rows);
              break;
            default:
              break;
          }
      
          e.preventDefault();
                  
        };


        return (
          <div  style={{marginTop:"30px"}}>
            <nav>
              <Link to="/politica">Click para consultar Política de Privacidad</Link>
            </nav>
            <form onSubmit={(e)=>crearFormData(e)} encType="multipart/form-data">
             
              <input id="btnArchivo" type="file" name='files' multiple onChange={handleFilesChange} />
              
              <table>
                <thead>
                  <tr >
                    <th >Ruta Archivo</th>
                    <th>Correo</th>
                    <th>Asunto</th>
                    <th>Mensaje</th>
                  </tr>
                </thead>
                <tbody>
                  {archivos.map((archivo, index) =>(
                  <tr key={index}>
                    <td>{archivo.name}</td>
                        
                          
                            <td><input type="text"   value={correo[index] || ''} onPaste={(e) => handlePaste(e, 'correo')} onChange={(e) => {const newCorreo = [...correo]; newCorreo[index] = e.target.value; setCorreo(newCorreo);
                           }}/></td>

                          <td><input type="text" value={asunto[index] || ''} onPaste={(e) => handlePaste(e, 'asunto')} onChange={(e) => { const newAsunto = [...asunto]; newAsunto[index] = e.target.value; setAsunto(newAsunto);
                          }}/></td>
                          
                          <td><input type="text"  value={ mensaje[index] || ''} onPaste={(e) => handlePaste(e, 'mensaje')} onChange={(e) => { const newMensaje = [...mensaje]; newMensaje[index] = e.target.value; setMensaje(newMensaje);
                  }}/></td>
                     
                  </tr>
                  ))}
                </tbody>
              </table>
                      <button id="btnEnviar" type='submit' style={{cursor:"pointer"}}> Enviar</button>
            </form>
          </div>
          
        );
      }


  