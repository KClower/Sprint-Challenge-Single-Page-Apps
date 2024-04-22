import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
 

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getCharacters = () => {
      axios
       .get('https://rickandmortyapi.com/api/character')
       .then(response => {
        
        setCharacters(response.data.results)
       })
       .catch(error => {
        console.error("server error", error);
       })
    }
   getCharacters();
  }, []);
  console.log("these are the characters", characters)

const searchCharacters = (searchTerm) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/?name=${searchTerm.toLowerCase()}`)
    .then(response => {
      console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.error(error.message)
    })
   
  }


 

  return (
    <div>
      <SearchForm searchHandler={searchCharacters}/>
    <section className="character-list d-flex flex-wrap justify-content-evenly">
    {characters.map(character => {
  
      return( 
         <CharacterCard
        character={character} 
        id={character.id}
        image={character.image}
        name={character.name}
        species={character.species}
        status={character.status}
        location={character.location}
        origin={character.origin}
        episodes={character.episode}
         />

       )
  
    })}
    </section>
    </div>
  );
}
