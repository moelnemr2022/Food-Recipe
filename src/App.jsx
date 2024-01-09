import searchIcon from './search.svg'
import './App.css'
import FoodCard from './FoodCard'
import Slider from './Slider'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import FoodMain from './FoodMain'
import MealRecipe from './MealRecipe'
import Category from './Category'
import CategoryCard from './CategoryCard'
import CategoryMeal from './CategoryMeal'





function App() {

  const [quary, setQuary] = useState('')
  const [fCat, setFCat] = useState([])
  const api2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const api3 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';



  function searchCat() {
    const url = api2 + quary
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFCat(data.meals)
        // console.log(data.meals);
      })
  }


  return (

    <div className='app'>

      <Routes>
      <Route path='/Food-Recipe/MealRecipe/:idMeal' element={<MealRecipe />}></Route> 
        <Route path='/Food-Recipe/CategoryMeal/:strCategory' element={<CategoryMeal />}></Route>
        <Route path='/Food-Recipe/Category' element={<Category/>}></Route>
        <Route path='/Food-Recipe' element={
          
          <>
            <FoodMain quary={quary} setQuary={setQuary}
              fCat={fCat} setFCat={setFCat} searchCat={searchCat} />
            
          </>
        }>
        
        </Route>
       
      </Routes>
      <div>




      </div>

    </div>


  )
}

export default App



