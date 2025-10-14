import './App.css'
import { TwitterFollowcard } from './TwitterFollowCard.jsx'
export function App() {
    return (
    <div className='Conteiner-user-cards'>
        <TwitterFollowcard userName="gary_xdinzho2" name="Garyxito" />
        <TwitterFollowcard userName="jonathandavis" name="Jonathan" />
        <TwitterFollowcard userName="someone" name="FrutigerPlace" />
    </div>
)
    
}