import React from 'react'
import './Main.css'
import Section from './Section'

const Main = () => {
  return (
    <div className='main-container'>
        <Section h2 ='work-1' p ='  Lorem ipsum dolor sit amet consectetur adipisicing elit. ' img = 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />

        <Section  h2 ='work-2' p ='  Lorem ipsum dolor sit amet consectetur adipisicing elit. ' img = 'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />

        <Section  h2 ='work-3' p ='  Lorem ipsum dolor sit amet consectetur adipisicing elit. ' img = 'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
        
    </div>

        
  )
}

export default Main