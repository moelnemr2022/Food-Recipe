import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import RecipeData from './RecipeData'
import FoodCard from './FoodCard'
// import Area from './Area'
import AreaCard from './AreaCard'
import AreaFoodCard from './AreaFoodCard'

export default  function AreaMeal() {

  const [fCat, setFCat] = useState([])
  const api2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';


  const params = useParams()

  function searchCat() {
    const url = api2 + params.strArea
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFCat(data.meals)
        console.log('-------', params.strArea);
      })
  }


  
   console.log('kkkkkkk',params);
  useEffect(() => { searchCat() }, [])


  return (
    <>
<Link  className='Home btn' to="/Food-Recipe/Area">Back to All Countries</Link> 
      <h1>{params.strArea}</h1>
<div className='Link-m'>
      
       

       {/* <Link  className='Home btn' to="/Food-Recipe">Home </Link>  */}
       </div>
     <div className='container '>

       {fCat ? (
          fCat.map((item) => {
            return <AreaFoodCard key={item.idMeal} item={item} />

          })
        ) : <h2 className='noData'>No Data Available</h2>}

</div>

    </>
  )
}

