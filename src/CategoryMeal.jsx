import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import RecipeData from './RecipeData'
import FoodCard from './FoodCard'
export default  function CategoryMeal() {

  const [fCat, setFCat] = useState([])
  const api2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';


  const params = useParams()

  function searchCat() {
    const url = api2 + params.strCategory
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFCat(data.meals)
        console.log('aly', data.meals);
      })
  }


  
   console.log('kkkkkkk',params);
  useEffect(() => { searchCat() }, [])


  return (
    <>

      <h1> {params.strCategory}</h1>
<div className='Link-m'>
      
       <Link  className='Home btn' to="/Food-Recipe/Category">Back</Link> 

       <Link  className='Home btn' to="/Food-Recipe">Home </Link> 
       </div>
     <div className='container '>

       {fCat ? (
          fCat.map((item) => {
            return <FoodCard key={item.idMeal} item={item} />

          })
        ) : <h2 className='noData'>No Data Available</h2>}

</div>

    </>
  )
}

