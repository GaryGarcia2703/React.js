import './App.css'
export function Tarjeta({ nombre, titulo, descripcion, img , icon}) {

  return (

    <div className="Conteiner">
      <div  className="tarjeta"
            style={{
            backgroundImage: `url(${img})`,
            }}
            >

            <h1>{titulo}</h1>
        </div>

        <h2>
            {nombre}

            <img className='icon' src={icon} alt="icon de sonic , shadow silver " />
        </h2>

      <p>{descripcion}</p>
    </div>
  )
}
