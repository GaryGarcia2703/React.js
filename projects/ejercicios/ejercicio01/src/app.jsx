export function App() {

    const btnSoma = document.querySelector("button#soma")
    var numeros = 0
    function somar() {
        numeros++
    }
    btnSoma.addEventListener("click" , somar())

    
    var texto = `total números: ${numeros}`

    return (
        <div>
            <p>{texto}</p>
        </div>
    )
}