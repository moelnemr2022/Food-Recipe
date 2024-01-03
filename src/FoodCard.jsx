import { Link, NavLink } from "react-router-dom";

function FoodCard(props) {

  const testDetails = ()=>{
console.log(props.item.idMeal);

  }
  return (
    <div className="movie" onClick={()=>testDetails() } >

<Link to={`/MealRecipe/${props.item.idMeal}`}>



      <div>
        <p>{props.item.strMeal}</p>
      </div>

      <div>
        <img
          src={props.item.strMealThumb
            !== "N/A" ? props.item.strMealThumb : "https://via.placeholder.com/400"}
          alt={props.item.strMeal}
        />
      </div>

      <div>
        <span>{props.item.strMeal}</span>
        <h3>{props.item.strMeal}</h3>



      </div>
      </Link>
    </div>
  )
}

export default FoodCard

