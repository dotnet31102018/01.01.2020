import React, { Component } from 'react';


const Superheroes = ({ heroes, delete_func }) => {
  // since we don't have props we get the data as a parameter!
  // const { heroes } = this.props

  const heroes_list = heroes.map(one_hero => {
    const { hero, name, power, id } = one_hero
    return (
      <div key={id}>
        <p>HERO-NAME : {hero}</p>
        <p>NAME : {name}</p>
        <p>POWER : {power}</p>
        <button className="btn" onClick={() => { delete_func(one_hero.id) }} >X</button>
        <hr />
      </div>
    )
  })
  return (
    <div>
      {heroes_list}
    </div>
  )
}


export default Superheroes;