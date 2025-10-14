export function TwitterFollowcard ({userName , name ,isFollowing}) {
const imgSrc = `https://unavatar.io/${userName}`
    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
            className='tw-followCard-avatar' 
            src= ""
            alt="mii avatar"/>

            <div className='tw-followCard-info'>
                <strong>
                    hola
                </strong>

                <span className='tw-folloCard-infoUsername'>
                    hola
                </span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>Seguir</button>
        </aside>
    </article>
)
}