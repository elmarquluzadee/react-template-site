import React from 'react'
import Button from '../Button/Button'
import "./Section.css"

const Section = (props) => {
  return (
    <div className='section-container'>
        <div className='section-item-container'>
            <img src={props.img} alt=""/>
        </div>
        <div className='section-item'>
          <h2>{props.h2}</h2>
            <p>{props.p}</p>
        </div>
        <div>
          <Button/>
        </div>
    </div>
  )
}

export default Section