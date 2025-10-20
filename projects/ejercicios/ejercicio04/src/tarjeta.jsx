import { App } from "./App"
export function Tarjeta({nombre , titulo , descipcion , img}) {
    return (
        <div className="Conteiner">
            <h1>{nombre} </h1>

            <h2>{titulo} </h2>
            
            <img src={img} alt="imagem de un erizo" />

            <p>{descipcion} </p>
        </div>
    )
}