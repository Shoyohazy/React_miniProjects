
import { FOOD_IMG } from "../Constants";

const RestaurantCard = ({name , locality , costForTwo , cloudinaryImageId , areaName}) =>{
    return(
      <div className = "restaurant-list">
          <img 
          alt = "logo"
          src = {FOOD_IMG + cloudinaryImageId}
          />
          <h2>{name}</h2>
          <h2>{locality}</h2>
          <h2>{areaName}</h2>
          <h2>{costForTwo}</h2>
      </div>
    )
  }

export default RestaurantCard;