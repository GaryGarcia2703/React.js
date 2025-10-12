import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const conteiner = document.querySelector("div#conteiner")
const root = createRoot(conteiner)

const elementos = (
  <StrictMode>
    <h1>Olá</h1>
    <button>clicka aqui para dar like</button>
    <button>aqui para dar dislike</button>
  </StrictMode>
  
)

root.render(
  elementos
)
