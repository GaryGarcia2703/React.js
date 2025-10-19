import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Frutas } from './frutas.jsx'

const conteiner = document.querySelector("div#root")
const root = createRoot(conteiner)
root.render(
  <StrictMode>
    <Frutas />
  </StrictMode>
)
