import { App } from "./App"
import './App.css'

export function Tarjeta({nombre , titulo , descripcion , img}) {

    return (
        <div className="Conteiner">

            <div id={nombre}

            style={{backgroundImage: `url(${img})`}}
            >
                <h1>{nombre}</h1>
            </div>

            <h2>{titulo}</h2>

            <p>{descripcion} </p>
        </div>
    )
}