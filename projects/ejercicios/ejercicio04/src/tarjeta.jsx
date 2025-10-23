import './App.css'
export function Tarjeta({nombre, titulo, descripcion, img, icon, imgGameplay, imgGameplay1, imgGameplay2 ,  juegoDescripcion1,  juegoDescripcion2,  juegoDescripcion3}) {

  return (

    <div className="Conteiner">
        <div  className="tarjeta" 
            style={{
            backgroundImage: `url(${img})`,
            }}
            >

            {/* Banner del personaje */}

            <h1>{titulo}</h1>
        </div>

        <h2>
            {nombre} {/* introduccion del personaje*/}

            <img className='icon' src={icon} alt="icon de sonic , shadow silver " />
        </h2>

        <div className='gameplayFlex'> {/* conteiner de biografia del personaje*/}

            <h3 className='tituloJuego'>Colours</h3> {/* titulo del juego*/}

            <div className='gameplayImg' id='item1'>
                <img src={imgGameplay} alt="sonic" />
                <p>{juegoDescripcion1}</p>
            </div>

            <h3 className='tituloJuego'>Unleashed</h3> {/* titulo del juego*/}

            <div className='gameplayImg' id='item2'>
                <p>{juegoDescripcion2}</p>
                <img src={imgGameplay1} alt="silver" />
            </div>

            <h3 className='tituloJuego'>Adventure 2</h3> {/* titulo del juego*/}

            <div className='gameplayImg' id='item3'>
                <img src={imgGameplay2} alt="shadow" />
                <p>{juegoDescripcion3}</p>
            </div>
        </div>

        <p>{descripcion}</p> {/* descripción del personaje*/}
    </div>
  )
}
