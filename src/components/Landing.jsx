import React from 'react'
import '../styles/landing.css';
import Background from '../img/landing-background-dark.jpg'


function Landing() {
    return (
        <div className='landing__div' style={{
            backgroundImage: "url(" + Background + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            hello
        </div>
    )
}

export default Landing
