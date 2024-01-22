import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookSquare,faTwitterSquare,faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
      <hr />
        <br />
      <div className='Footer'>

      

        <div className="social-media">

        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} data-testid='FaceBook' size="2x" color='rgb(249, 211, 180)'/>
        </a>

        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagramSquare} data-testid='instagram' size="2x" color='rgb(249, 211, 180)' />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitterSquare}  data-testid='twitter' size="2x" color='rgb(249, 211, 180)'/>
        </a>
        </div>
        <h3 className='copy'>© 2024 Food Recipe</h3>

        <div className="about-link">
          <Link to="/AboutUs">AboutUs</Link>
        </div>
        
      </div>
      
    </>
  )
}
