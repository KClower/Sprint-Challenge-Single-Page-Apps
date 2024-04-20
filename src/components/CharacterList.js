import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [filteredCharacter, setFilteredCharacter] = useState([])

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
  console.log(characters)

const filterCharacters = (searchTerm) => {
console.log(searchTerm)
const result = characters.filter(character => {
  return character.name.toLowerCase().includes(searchTerm.toLowerCase())

})
setFilteredCharacter(result)
}

const characterArray = filteredCharacter.length === 0 ? characters : filteredCharacter

  return (
    <div>
      <SearchForm searchHandler={filterCharacters}/>
    <section className="character-list d-flex flex-wrap justify-content-evenly">
    {characterArray.map(character => {
  
      return( 
         <CharacterCard
        id={character.id}
        image={character.image}
        name={character.name}
        species={character.species}
        status={character.status}
        location={character.location}
        origin={character.origin}
         />
       )
  
    })}
    </section>
    </div>
  );
}
