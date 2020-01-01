import React, { Component } from 'react';


const Superheroes = ({ heroes }) => {
  // since we don't have props we get the data as a parameter!
  // const { heroes } = this.props

  return (
    <div>

      {heroes.map(one_hero => {
        const { hero, name, power, id } = one_hero
        return (
          <div key={id}>
            <p>HERO-NAME : {hero}</p>
            <p>NAME : {name}</p>
            <p>POWER : {power}</p>
            <hr />
          </div>
        )
      })}

    </div>
  )
}


export default Superheroes;