import React, { useState, useEffect  } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";



export default function LocationsList() {

    const [locations, setLocations] = useState([])


 useEffect(() => {
    const getLocations = () => {
      axios
       .get('https://rickandmortyapi.com/api/location')
       .then(response => {
        console.log(response.data.results)
        setLocations(response.data.results)
      })
       .catch(error => {
        console.error("server error", error);
      })
    }
      getLocations();    
    }, []);


return (
    <div>
        <section className="location-list d-flex flex-wrap justify-content-evenly">
    {locations.map(location => {
        return(
            <LocationCard 
            id={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            residents={location.residents}
            />
        )
    })}
  
  </section>
    </div>
)



}