import { useState } from "react"

export function TwitterFollowcard({ formatUsername, userName, name, isFollowing }) {
  
  const images = {
    gary_xdinzho2: "img/Silver Wallpaper.jpeg",
    jonathandavis: "img/mii.png",
    someone: "img/fa-icon.png"
  }

  const imgSrc = images[userName] || "img/default.png"

  const [followState, setFollowState] = useState(isFollowing)

  const text = followState ? "Siguiendo" : "Seguir"
  const buttonClassName = followState
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

  const handleClick = () => {
    setFollowState(!followState)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imgSrc}
          alt="avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">
            {formatUsername(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}
