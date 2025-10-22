import './App.css'
export function Tarjeta({nombre, titulo, descripcion, img, icon, imgGameplay, imgGameplay1, imgGameplay2}) {

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

        <div className='flex'>
            <div className='gameplay'>
                <img src={imgGameplay} alt="sonic" />
                <p>{descripcion}</p>
            </div>

            <div className='gameplay'>
                <img src={imgGameplay1} alt="silver" />
                <p>{descripcion}</p>
            </div>


            <div className='gameplay'>
                <img src={imgGameplay2} alt="shadow" />
                <p>{descripcion}</p>
            </div>
        </div>

        <p>{descripcion}</p>
    </div>
  )
}
