export function App() {

    const btn = document.querySelector("button#soma")
    var numeros = 0
    var texto = `total números: ${numeros}`

    return (
        <div>
            <p>{texto}</p>
        </div>
    )
}