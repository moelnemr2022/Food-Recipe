import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

function RecipeData({ fCat }) {
  console.log("ssss", fCat);


  const [ing, setIng] = useState([])

  const ingredient = () => {
    const arrData = []
    for (let i = 1; i < 20; i++) {
      let ingrvar = 'strIngredient' + i
      let measurevar = 'strMeasure' + i
      let ingervarf = fCat[0][ingrvar]
      let measurevarf = fCat[0][measurevar]
      let ingmeasure = i + '- ' + measurevarf + ' of ' + ingervarf
      ingervarf && arrData.push(ingmeasure)
    }
    console.log('Data', arrData);
    setIng(arrData)
  }

  useEffect(() => {
    ingredient()
  }, [])



  return (
    <div className='main'>

      <div className='d-flex justify-content-center my-5'>
        <h1 className='Meal text-center'>
          {fCat[0].strMeal}

        </h1>
      </div>
      <img className='Thumb' src={fCat[0].strMealThumb} />

      <br /><br />

      <div className='mk d-flex flex-column mb-3'>

        <h1 >
          Instructions
        </h1>
        <br />

        <br />
        <h1 className='Instructions'>
          {fCat[0].strInstructions}
        </h1>
      </div>

      <hr />
      <br />
      <br />
      <div className='mk d-flex flex-column mb-3'>
        <h1>
          ingredient:
          <br />
          <br />

        </h1>
        {ing.map((item, index) => (
          <h1 className='ingredient Instructions' key={index}>{item}</h1>))}
      </div>


      <hr />
      <br />
      <div className='ReactPlayer-d d-flex justify-content-center my-5' >
        <ReactPlayer
          url={fCat[0].strYoutube}
          controls={true}
          width='50%'
          height='400px'


        />
      </div>



    </div>

  )
}

export default RecipeData