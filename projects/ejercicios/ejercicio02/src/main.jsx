import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Frutas } from './frutas.jsx'

const conteiner = document.querySelector("div#root")
const root = createRoot(conteiner)

root.render(
    <Frutas />
)
