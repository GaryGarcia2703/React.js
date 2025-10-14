export function TwitterFollowcard ({userName , nome ,isFollowing}) {
    return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
            className='tw-followCard-avatar' 
            src="img/mii.png" 
            alt="mii avatar"/>

            <div className='tw-followCard-info'>
                <strong>Miguel Ángel</strong>
                <span className='tw-folloCard-infoUsername'>@midudev</span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>Seguir</button>
        </aside>
    </article>
)
}