import { Link, NavLink } from "react-router-dom";

 

export default function AreaCategoryCard(props) {

  const testDetails = () => {
    
  }
  return (
    <div className="movie movie-img" onClick={() => testDetails()} >

      <Link to={`/Food-Recipe/AreaMeal/${props.name}`}>



        <div>
          <p>{props.name}</p>
        </div>

        <div>
          <img 
            
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


