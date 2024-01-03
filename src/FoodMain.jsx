import searchIcon from './search.svg'

import FoodCard from './FoodCard'
import Slider from './Slider'
import { useEffect, useState } from 'react'

export default function FoodMain({ quary, setQuary, fCat, setFCat, searchCat }) {

  useEffect(() => { searchCat() }, [])

  return (
    <div >  
      <div className='dd'>
      <h1 >Food Recipe</h1>
      </div>
      <div className='search_new'>
      <div className='search'>
        <input type="text" onChange={(e) => setQuary(e.target.value)} placeholder='search for food' />
        <img src={searchIcon} onClick={() => searchCat()} alt="" />
        </div>
      </div>
      <Slider />



      <div className='container '>



        {fCat ? (
          fCat.map((item) => {
            return <FoodCard key={item.idMeal} item={item} />

          })
        ) : <h2 className='noData'>No Data Available</h2>}

      </div>






    </div>
  )
}