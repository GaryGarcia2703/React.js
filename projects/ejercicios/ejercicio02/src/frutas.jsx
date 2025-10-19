export function Frutas() {
    const ListaFrutas = ["Manzana" , "Patilla" , "Cambur" , "Fresa"]
    return (
        <div>
        <h1>Lista de Frutas:</h1>
        <ul>
            {ListaFrutas.map((ListaFrutas) => 
                (<li>{ListaFrutas}</li>)
            )}
            
        </ul>
        </div>
    )
}