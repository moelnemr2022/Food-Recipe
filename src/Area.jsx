import searchIcon from './search.svg'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
// import CategoryCard from './CategoryCard'
import AreaCategoryCard from './AreaCategoryCard';
import  canadian from './imges/canada.gif'
import egypt from './imges/egypt.gif'
import england from './imges/england.gif'
import usa from './imges/usa.gif'
import china from './imges/china.gif'
import Croatia from './imges/Croatia.gif'
import France from './imges/France.gif'
import India from './imges/India.gif'
import Ireland from './imges/Ireland.gif'
import Italy from './imges/Italy.gif'
import Greece from './imges/Greece.gif'
import Jamaica from './imges/Jamaica.gif'
import Japan from './imges/Japan.gif'
import Kenya from './imges/Kenya.gif'
import Malaysia from './imges/Malaysia.gif'
import Mexico from './imges/Mexico.gif'
import Morocco from './imges/Morocco.gif'
import Philippines from './imges/Philippines.gif'
import Poland from './imges/Poland.gif'
import Portugal from './imges/Portugal.gif'
import Russia from './imges/Russia.gif'
import Spain from './imges/Spain.gif'
import Thailand from './imges/Thailand.gif'
import Tunisia from './imges/Tunisia.gif'
import Turkey from './imges/Turkey.gif'
import Vietnam from './imges/Vietnam.gif'
import Netherlands from './imges/Netherlands.gif'

const countries=[
  {
      "name": "American",
      image : usa
  },
  {
      "name": "British",
      image :england
  },
  {
      "name": "Canadian",
      image :canadian
  },
  {
      "name": "Chinese",
      image :china
  },
  {
      "name": "Croatian",
      image :Croatia
  },
  {
      "name": "Dutch",
      image :Netherlands
  },
  {
      "name": "Egyptian",
      image :egypt
  },
  {
      "name": "Filipino",
      image :Philippines
  },
  {
      "name": "French",
      image :France
  },
  {
      "name": "Greek",
      image :Greece
  },
  {
      "name": "Indian",
      image :India
  },
  {
      "name": "Irish",
      image :Ireland
  },
  {
      "name": "Italian",
      image :Italy
  },
  {
      "name": "Jamaican",
      image :Jamaica
  },
  {
      "name": "Japanese",
      image :Japan
  },
  {
      "name": "Kenyan",
      image :Kenya
  },
  {
      "name": "Malaysian",
      image :Malaysia
  },
  {
      "name": "Mexican",
      image :Mexico
  },
  {
      "name": "Moroccan",
      image :Morocco
  },
  {
      "name": "Polish",
      image :Poland
  },
  {
      "name": "Portuguese",
      image :Portugal
  },
  {
      "name": "Russian",
      image :Russia
  },
  {
      "name": "Spanish",
      image :Spain
  },
  {
      "name": "Thai",
      image :Thailand
  },
  {
      "name": "Tunisian",
      image :Tunisia
  },
  {
      "name": "Turkish",
      image :Turkey
  },
  {
      "name": "Unknown",
      image :""
  },
  {
      "name": "Vietnamese",
      image :Vietnam
  }
]



export default function Area() {
  const [quary, setQuary] = useState('')
  // const [fCat, setFCat] = useState([])
  const api2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const api3 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';



  const myuuid = uuidv4();

  // function searchCat() {
  //   const url = apiUrl + quary
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.meals);
  //       setFCat(data.meals)

  //     })
  // }



  // useEffect(() => { searchCat() }, [])

  return (
    <div >
      <div className='dd'>

        <h1 >Area</h1>

      </div>
      {/* <div className='d-flex justify-content-center'> <Link className='Home btn ' to="/Food-Recipe">Home</Link></div> */}
      <div className='container '>


        {countries ? (
          countries.map((item) => {
            return <AreaCategoryCard key={uuidv4()} name={item.name} image={item.image} />
          })
        ) : <h2 className='noData'>No Data Available</h2>}

      </div>

    </div>
  )
}
