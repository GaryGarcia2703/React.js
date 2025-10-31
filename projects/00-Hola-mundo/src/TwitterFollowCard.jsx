import { useState } from "react"
export function TwitterFollowcard ({formatUsername, userName , name ,isFollowing}) {

    let imgSrc = ""
    if (userName === "gary_xdinzho2") {
        imgSrc = "img/Silver Wallpaper.jpeg"
    } else if (userName === "jonathandavis") {
        imgSrc = "img/mii.png"
    } else if (userName === "someone") {
        imgSrc = "img/fa-icon.png"
    }

    const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1]

    const text = isFollowing 
    ? "Siguiendo" 
    : "Seguir"

    const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>

            <img
            className='tw-followCard-avatar' 
            src={imgSrc} 
            alt="mii avatar"
            />

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
            <button className={buttonClassName}>
                {text}
            </button>
        </aside>
    </article>
)
}