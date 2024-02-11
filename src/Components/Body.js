import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{ 

const [listOfRes,setListOfRes] = useState([]);
const [filteredListOfRes,setFilteredListOfRes] =useState([])
const [searchText, setSearchText]=useState("");

useEffect(()=>{
  fetchData()
},[]);  

  const fetchData = async() => {
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json()
  console.log(json)
  setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilteredListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

if(listOfRes.length===0){
  return <Shimmer/>
}

return(<div id="body"> 
        <div className="filter">
          <div className="search">
            <input  
                type="text" 
                className="text-box" 
                value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value)
                  }}
                />
            <button onClick={()=>{

               const filteredListOfRes = listOfRes.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredListOfRes(filteredListOfRes)

            }} >Search</button>
          </div>
          <button 
            className="filter-btn"
            onClick={() => {
            filteredList = listOfRes.filter((res) => res.info.avgRating > 4);
            setFilteredListOfRes(filteredList)}}       
          >Top Rated Restaurants
          </button>
        </div>
      <div id="res-container">
{filteredListOfRes.map((restaurant)=>(<RestaurantCard 
                    key={restaurant.info.parentId} 
                    resData={restaurant}/>
              ))}
       </div>
     </div>
  )}
export default Body; 