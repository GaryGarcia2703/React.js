import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

const conteiner = document.querySelector("div#conteiner")
const root = createRoot(conteiner)

root.render(
  <App/>
)