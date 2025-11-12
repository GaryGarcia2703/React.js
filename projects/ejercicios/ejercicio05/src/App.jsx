import { useState } from 'react'
import '../public/app.css'

export function App() {
  const [color, setColor] = useState('Azul')

  var buttonClassName = color
  if (color == 'Azul') {
    buttonClassName = "button-azul"
  }
  else {
    buttonClassName = "button-rojo"
  } 

  const cambioColor = () => {
    if (color === 'Azul') {
      setColor('Rojo')
    } else {
      setColor('Azul')
    }
  }

  return (
    <button className={buttonClassName} onClick={cambioColor}>
      Hola ({color})
    </button>
  )
}
