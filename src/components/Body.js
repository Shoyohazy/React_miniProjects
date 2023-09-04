import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";

const Body = () =>{
    return(
      <div className="restaurant-card">
        {restaurantList.map((restaurantList) =>{
          return <RestaurantCard {...restaurantList} key = {restaurantList.id} />
        })}
      </div>
      
    )
}

export default Body;