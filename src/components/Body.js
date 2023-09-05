import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import {useState} from "react";

function filterData(searchText , restaurant){
  
  const filterData =restaurant.filter((restaurant)=>
    restaurant.name.includes(searchText)
  );
  return filterData;
}

const Body = () =>{
  const [restaurant , setRestaurant] = useState(restaurantList);
  const [searchText , setSearchText] = useState("");

    return(
      <>
        <div className = "search-bar">
            <input 
            type="text" 
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}
            />
            <button onClick={()=>{
              const data = filterData(searchText , restaurant)
              setRestaurant(data)

            }}>Search</button>
        </div>
        <div className="restaurant-card">
          {restaurant.map((restaurantList) => {
            return <RestaurantCard {...restaurantList} key={restaurantList.id} />
          })}
        </div>
      </>

    )
}

export default Body;