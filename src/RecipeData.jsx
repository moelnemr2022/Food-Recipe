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
    console.log('tego', arrData);
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
      <img  className='Thumb' src={fCat[0].strMealThumb} />
    
      <h2 className='Instructions'>
        <h3> Instructions </h3>
        {fCat[0].strInstructions}
        
      </h2>
     <div className='d-flex justify-content-center my-5'>
      <h1>
        ingredient:
      </h1>
      </div>
    
      {ing.map((item, index) => (<h3 key={index}>{item}</h3>))}

<div className='ReactPlayer' >
      <ReactPlayer 
        url={fCat[0].strYoutube}
        controls='true'
        width='740px'
        height='360px'
      />
</div>  
    </div>
  )
}

export default RecipeData