import searchIcon from './search.svg'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'



export default function Category() {
  const [quary, setQuary] = useState('')
  const [fCat, setFCat] = useState([])
  const api2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const api3 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';


  const myuuid = uuidv4();

  function searchCat() {
    const url = apiUrl + quary
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.categories);
        setFCat(data.categories)

      })
  }



  useEffect(() => { searchCat() }, [])

  return (
    <div >
      <div className='dd'>

        <h1 >Category</h1>

      </div>
      <div className='d-flex justify-content-center'> <Link className='Home btn ' to="/Food-Recipe">Home</Link></div>
      <div className='container '>


        {fCat ? (
          fCat.map((item) => {
            return <CategoryCard key={uuidv4()} item={item} />
          })
        ) : <h2 className='noData'>No Data Available</h2>}

      </div>

    </div>
  )
}
