import './app.css'
import { useState } from 'react'
export function Card ({profileimg = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',children ='unkown',userName='@unknown'}) {


const URL = import.meta.env.VITE_BACKEND_URL;
const [isfollowing, setIsFollowing] = useState(false)
const text = isfollowing? 'Siguiendo' : 'Seguir'
const buttonClassName = isfollowing?  'tw-followCard-button is-following':'tw-followCard-button'
    
const handleClick = async() =>{
    setIsFollowing(!isfollowing)
    try {
        const res = await fetch(URL);
        const data = await res.text();
        console.log('Respuesta del backend:', data); 
      } catch (error) {
        console.error('Error de conexión:', error);
      }
}

return (

    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img src={profileimg} className='tw-followCard-avatar'/>
        <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>{userName}</span>
        </div>
    </header>
    <aside><button className={buttonClassName} onClick={handleClick}>
        <span className='tw-folloCard-text'>{text}</span>
        <span className='tw-followCard-stopfollow'>Dejar de seguir</span>
        </button></aside>
</article>
)   
}