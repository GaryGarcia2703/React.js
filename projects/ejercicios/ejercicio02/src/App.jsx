import { useState } from 'react'
import { Saludos } from './saludos'

function App() {
  const [nombre, setNombre] = useState('')

  return (
    <div>
      <h1>Informa tu Nombre</h1>

      <label htmlFor="Nombre">Nombre:</label>
      <input
        type="text"
        id='Nombre'
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />


      <Saludos nombre={nombre} />
    </div>
  )
}

export default App
