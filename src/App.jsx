import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`
    return (
        <section className="App">
            <React.Fragment>
                <TwitterFollowCard 
                formatUserName={format} 
                userName="duckduckgo">
                    Pato
                </TwitterFollowCard>              
                <TwitterFollowCard 
                formatUserName={format}           
                userName="gummibeer">
                    Osito Panda
                </TwitterFollowCard>
                <TwitterFollowCard 
                formatUserName={format}             
                userName="Adolfo" >
                    Fofin
                </TwitterFollowCard>
            </React.Fragment>
        </section>

//Componente -> Función que al ejecutarla te devuelve un elemento
//Elemento -> Es lo que renderiza React
//props son las propiedades de un componente
//Las props son inmutables, en vez de modificar una prop crear una const
        //userName = `@${userName}` --> Nunca
        //const userName = `@${userName}` --> mejor
//Que es un estado? Un objeto que contiene datos que pueden cambiar en el tiempo!!
        //Como un interruptor, on/off esta uno u otro no a la vez
//React es declarativo, JS es imperativo
    )
}