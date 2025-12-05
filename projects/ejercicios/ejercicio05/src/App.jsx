import { useState } from 'react'
import '../public/app.css'

export function App() {
  const [accion, setAccion] = useState('Sumar')

  {/* condicional para cambiar el nombre de la clase */}
  var buttonClassName = accion
  if (accion == 'Sumar') {
    buttonClassName = "button-azul"
  } else {
    buttonClassName = "button-rojo"
  } 

  {/* Función para cambiar el estado del botón */}  
  const cambioColor = () => {
    if (accion === 'Sumar') {
      setAccion('Restar')
    } else {
      setAccion('Sumar')
    }
  }
  ///////////////////////////////////////////////
  {/* Retornando elementos via react.js */}  

  {/* en la versión 0.0.2 desarrollare logica para verificar el estado del botón, segun esto sumar o resto número esnteros.... */}  

  return (
    <div className='conteiner'>
      <button className={buttonClassName} onClick={cambioColor}>
        ({accion})
      </button>
    </div>
  )
}
