import { useState } from "react"

export function App() {
  // Estado que lembra o número entre renderizações
  const [numeros, setNumeros] = useState(0)

  // Função que aumenta o número
  function Somar() {
    setNumeros(numeros + 1)
  }

  // JSX é a “versão React” do botão e do texto
  const btntxt = <button onClick={Somar}>Somar + 1</button>
  const texto = `Total números: ${numeros}`

  return (
    <div>
      {btntxt}
      <p>{texto}</p>
    </div>
  )
}
