import './App.css'
import { TwitterFollowcard } from './TwitterFollowCard.jsx'

export function App() {
    const formatUsername = (userName) => `@${userName}`

    return (
    <div className='Conteiner-user-cards'>
        <TwitterFollowcard 
        formatUsername={formatUsername}
         isFollowing={false} 
         userName="gary_xdinzho2" 
         name="Garyxito" />

        <TwitterFollowcard 
        formatUsername={formatUsername}
        isFollowing={true} 
        userName="jonathandavis" 
        name="Jonathan" />


        <TwitterFollowcard 
        formatUsername={formatUsername}
        isFollowing={false} 
        userName="someone" 
        name="FrutigerPlace" />

        <TwitterFollowcard 
        formatUsername={formatUsername}
        isFollowing={false} 
        userName="ThisHumpsTheyWillNotHeal" 
        name="LinkinParkListener729" />
    </div>
)
    
}