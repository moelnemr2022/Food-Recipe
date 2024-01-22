import { Link, NavLink } from "react-router-dom";
import searchIcon from './search.svg'
import FoodCard from './FoodCard'
import Slider from './Slider'
import { useEffect, useState } from 'react'

export default function FoodMain({ setQuary, fCat, searchCat }) {

  useEffect(() => { searchCat() }, [])

  return (
    <div >
      <br />
      <br />
      <div className='dd'>
        <h1 >Food Recipe</h1>
      </div>
      <div className='search_new'>
        <div className='search'>
          <input type="text" onChange={(e) => setQuary(e.target.value)} placeholder='search for food' />
          <img src={searchIcon} onClick={() => searchCat()} alt="" />

        </div>


      </div>
      {/* <div className="categoryDivBtn d-flex justify-content-center">
        <Link to={'/Food-Recipe/Category'} className="btn btn-light tego">Category</Link>

      </div> */}
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
