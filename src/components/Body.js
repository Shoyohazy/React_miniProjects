import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurant) {

  const filterData = restaurant.filter((restaurant) =>
    restaurant.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0222973&lng=73.10217709999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  
  return (restaurants.length === 0)? <Shimmer/> : (
    <>
      <div className="search-bar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button onClick={() => {
          const data = filterData(searchText, restaurants)
          setRestaurants(data)

        }}>Search</button>
      </div>
      <div className="restaurant-card">
        {restaurants.map((restaurant) => {
          return (<RestaurantCard {...restaurant.info} key={restaurant.info.id} />);
        })}
      </div>
    </>

  )
}

export default Body;