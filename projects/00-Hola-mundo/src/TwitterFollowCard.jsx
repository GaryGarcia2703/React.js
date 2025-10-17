export function TwitterFollowcard ({formatUsername, userName , name ,isFollowing}) {

    let imgSrc = ""
    if (userName === "gary_xdinzho2") {
        imgSrc = "img/Silver Wallpaper.jpeg"
    } else if (userName === "jonathandavis") {
        imgSrc = "img/mii.png"
    } else if (userName === "someone") {
        imgSrc = "img/fa-icon.png"
    }

return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
            className='tw-followCard-avatar' 
            src={imgSrc} 
            alt="mii avatar"/>

            <div className='tw-followCard-info'>
                <strong>
                    {name}
                </strong>

                <span className='tw-folloCard-infoUsername'>
                    {formatUsername(userName)}
                </span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>Seguir</button>
        </aside>
    </article>
)
}