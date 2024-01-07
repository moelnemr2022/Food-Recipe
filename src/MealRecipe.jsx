import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import RecipeData from './RecipeData'


 function MealRecipe() {

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
      {/* <h1> {params.idMeal}</h1> */}
    
      <Link  className='Home btn ' to="/Food-Recipe">Home</Link>
      {fCat.length && <Link  className='Home btn' to={`/CategoryMeal/${fCat[0].strCategory}`}> {fCat[0].strCategory} Category</Link>
}
{/* <Link className='Home' to={`/CategoryMeal/${props.item.strCategory}`}>lllllllllllllll</Link>  */}
      <h2 className='FF'>
        {fCat.length > 0 ? <RecipeData fCat={fCat} /> : <p>loading</p>}
      </h2>


    </>
  )
}

export default MealRecipe