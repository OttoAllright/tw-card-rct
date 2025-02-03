import './app.css'
import { useState } from 'react'
export function Card ({children ='unkown',userName='@unknown'}) {

    const [isfollowing, setIsFollowing] = useState(false)

const text = isfollowing? 'Siguiendo' : 'Seguir'
const buttonClassName = isfollowing?  'tw-followCard-button is-following':'tw-followCard-button'
    
const handleClick = () =>{
    setIsFollowing(!isfollowing)
}

return (

    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img src="https://yt3.ggpht.com/8zDh_qQPQRQx1a8mZRBcdGsRkd6qIq3fU_OsK5j61AJuBtMS4wJ_QwBlgciIWzfCT7k_I4Ei4w=s88-c-k-c0x00ffffff-no-rj" className='tw-followCard-avatar'/>
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