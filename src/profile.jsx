import React from 'react'
import "./profile.css"
import arrowLeft from "../src/components/data/img/arrow-left.svg"
import pokebola from "../src/components/data/img/Pokeball.png"


const profile = () => {
  return (
    <div className="container">

    <header>
        <div className="header1">
    <img className='arrowLeft' src={arrowLeft} alt="" />
    <h1 className='h1Header'>Bulbasaur</h1>
    <h2 className='h2Header'>#001</h2>
    </div>
    <img className='pokebola' src={pokebola} alt="" />
    </header>

    <main>

    </main>
    </div>
  )
}

export default profile