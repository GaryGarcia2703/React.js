import { createRoot } from 'react-dom/client'
import { Nome } from './App.jsx'
import './index.css'

const conteiner = document.querySelector("div#conteiner")

createRoot(conteiner).render(
  <Nome></Nome>
)
