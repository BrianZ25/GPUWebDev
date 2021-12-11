import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hero.css';
import { Button2 } from './Button2';

function Hero() {
    return (
        <div className = 'hero-container'>
            <h1>GPU Stock</h1>
            <p>Sorted List For Graphics Cards</p>
            <div className="hero-btns">
                <Button2 className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                  NVIDIA  
                </Button2>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                  AMD  
                </Button>
            </div>
        </div>
    )
}

export default Hero
