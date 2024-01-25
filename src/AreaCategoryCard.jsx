import { Link, NavLink } from "react-router-dom";

 

export default function AreaCategoryCard(props) {

  const testDetails = () => {
    
  }
  return (
    <div className="movie" onClick={() => testDetails()} >

      <Link to={`/Food-Recipe/AreaMeal/${props.name}`}>



        <div>
          <p>{props.name}</p>
        </div>

        <div>
          <img
            // src={props.item.strArea !== "N/A" ? props.item.strArea: "https://via.placeholder.com/400"}
            // alt={props.item.strArea}
             src={props.image}
          />
          
        </div>

        <div>
          <span>{props.name}</span>
          <h3>{props.name}</h3>



        </div>
      </Link>
    </div>
  )
}


