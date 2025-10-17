import './App.css'
import { TwitterFollowcard } from './TwitterFollowCard.jsx'
export function App() {
    return (
    <div className='Conteiner-user-cards'>
        <TwitterFollowcard isFollowing={false} userName="gary_xdinzho2" name="Garyxito" />
        <TwitterFollowcard isFollowing={true} userName="jonathandavis" name="Jonathan" />
        <TwitterFollowcard isFollowing={false} userName="someone" name="FrutigerPlace" />
    </div>
)
    
}