import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import RecipeData from './RecipeData'


export default function AreaMealRecipe() {

  const [fCat, setFCat] = useState([])
  const api2 = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='



  function searchCat() {
    const url = api2 + params.idMeal
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFCat(data.meals)
        console.log('hhhhhhhh', data.meals);
      })
  }


  const params = useParams()
   console.log('&&&&&&&&&&&&&',params);
  useEffect(() => { searchCat() }, [])


  return (
    <>
      <Link  className='Home btn' to="/Food-Recipe">All Countries</Link>
      

      {fCat.length && <Link  className='Home btn' to={`/Food-Recipe/AreaMeal/${fCat[0].strArea}`}>Back to {fCat[0].strArea}  food</Link>}
      
      <h2 className='FF'>
        {fCat.length > 0 ? <RecipeData fCat={fCat} /> : <p>loading</p>}
     </h2> 
   
   
    </>
  )
}

