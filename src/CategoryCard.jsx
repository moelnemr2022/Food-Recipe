import { Link, NavLink } from "react-router-dom";

export default function CategoryCard(props) {

  const testDetails = () => {
     console.log(props.item.strCategory);

  }
  return (
    <div className="movie" data-testid="category-card" onClick={() => testDetails()} >

      <Link to={`/Food-Recipe/CategoryMeal/${props.item.strCategory}`}>



        <div>
          <p>{props.item.strCategory}</p>
        </div>

        <div>
          <img
            src={props.item.strCategoryThumb
              !== "N/A" ? props.item.strCategoryThumb : "https://via.placeholder.com/400"}
            alt={props.item.strCategory}
          />
        </div>

        <div>
          <span>{props.item.strCategory}</span>
          <h3>{props.item.strCategory}</h3>



        </div>
      </Link>
    </div>
  )
}


