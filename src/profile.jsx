import React from 'react'
import "./profile.css"
import arrowLeft from "../src/components/data/img/arrow-left.svg"
import pokebola from "../src/components/data/img/Pokeball.png"
import bulbasaur from "../src/components/data/img/bulbasaur.png"
import frame from "../src/components/data/img/Frame.svg"


const profile = () => {
  return (
    <div className="container">

    <header>
        <div className="header1">
    <img className='arrowLeft' src={arrowLeft} alt="Flecha" />
    <h1 className='h1Header'>Bulbasaur</h1>
    <h2 className='h2Header'>#001</h2>
    </div>
    <img className='frame' src={frame} alt="Frame" />
    <img className='pokebola' src={pokebola} alt="Pokebola" />
    </header>

    <main>
    <img className='bulbasaur' src={bulbasaur} alt="Bulbasaur" />
    <div className="buttones">
        <button className='verde'>Grass</button>
        <button className='violeta'>Polson</button>
    </div>
    <p>About</p>
    </main>
    </div>
  )
}

export default profile