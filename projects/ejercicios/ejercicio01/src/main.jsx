import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

const conteiner = document.querySelector("div#conteiner")

createRoot(conteiner).render(
  <App></App>
)
