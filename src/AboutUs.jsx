import React from 'react'

import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className='About'>

      <div className='d-flex justify-content-center'> <Link className='Home btn ' to="/Food-Recipe">Home</Link></div>

      <h2>About Us </h2>
      <p>

        Welcome to my Food Recipe App, where our love for food meets the digital world! Our team is passionate about creating a platform that makes exploring and discovering delightful recipes an enjoyable experience. We believe that cooking should be a fun and accessible activity for everyone, and our app is designed to make that vision a reality.
        <br />
        <br />
        At Food Recipe, we curate a diverse range of recipes, from quick and easy everyday meals to exotic dishes that will spark your culinary curiosity. Our user-friendly interface allows you to effortlessly search for specific recipes, explore various food categories, and dive into the details of each dish. We aim to inspire you to try new things in the kitchen and share the joy of cooking with your loved ones.
        <br />
        <br />
        Feel free to explore the app, discover exciting recipes, and embark on a culinary adventure with us. Whether you're a seasoned chef or just starting your cooking journey, Food Recipe is here to be your companion in the world of flavors. Join us on this gastronomic exploration, and let's make every meal a delightful experience together!

      </p>
    </div>
  )
}
