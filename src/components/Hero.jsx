import React from 'react'
import Button from './Button'

const Hero = ({subtitle}) => {
  return (
    <div className="hero-flex" >  {/* Flex container */}
    <div>
    <h1>Generation Thailand</h1>
    <h1>{subtitle}</h1>
    </div>
    
    <div>
    <a href={'/home/user'}><Button text="User Home Sector"/></a> 
    <a href={'/home/admin'}><Button text="Admin Home Sector"/></a> 
    </div>
    </div>
  )
}

export default Hero






