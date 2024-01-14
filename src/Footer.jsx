import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookSquare,faTwitterSquare,faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
      <div className='Footer'>

        <div className="social-media">

        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>

        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
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
