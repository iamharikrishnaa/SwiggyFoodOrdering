import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RES_LIST } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{ 

const [listOfRes,setListOfRes] = useState([]);
const [filteredListOfRes,setFilteredListOfRes] =useState([])
const [searchText, setSearchText]=useState("");

useEffect(()=>{
  fetchData()
},[]);  

  const fetchData = async() => {
  const data =await fetch(RES_LIST)
  const json = await data.json()
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
{filteredListOfRes.map((restaurant)=>(
      <Link
          key={restaurant.info.parentId} 
          to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/> 
      </Link> 
              ))}
       </div>
     </div>
  )}
export default Body; 