import {useState} from 'react'

export function TwitterFollowCard({formatUserName, userName, children}){
    const [isFollowing, setIsFollowing] = useState(false)
  
    const text = isFollowing ? 'siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following':
    'tw-followCard-button'

const handleClick = () =>{
    setIsFollowing(!isFollowing)
}

    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            alt= "Avatar de Pato"
            src = {`https://unavatar.io/${userName}`}/>
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
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
//const text = isFollowing ? 'siguiendo' : 'Seguir' 
    //Esto es una ternaria, como un if pero en chiquito
//import {useState} from 'react' --> hook --> calidad de vida
    //variable poara decir si estamos siguiendo o no
//const [isFollowing, setIsFollowing] = useState(false) -->Esta linea es igual a:
    //const state = useState(false)
    //const isFollowing = state[0]
    //const setIsFollowing = state[1]