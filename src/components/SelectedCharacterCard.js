import React, {useState, useEffect} from "react";
import axios from "axios";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
  } from "reactstrap";

export default function SelectedCharacterCard(props){
console.log(props.location.state)

const character = props.location.state

const [episodes, setEpisodes] = useState([])

useEffect(() => {
//const requests = character.episode.map(episode => axios.get(episode))
const requests = [axios.get(character.episode[0])]
Promise.all(requests).then(result => {
console.log(result)

const episodesResult = result.map(response => {
    return {
        airDate: response.data.air_date,
        episode: response.data.episode,
        name: response.data.name
    }
}) 
setEpisodes(episodesResult)
})
}, [])

return (
    <Card
    style={{
      width: '100%'
    }}
  >
  <section className= "d-flex">
    <img style={{width: '20rem'}}
      alt="character image"
      src={character.image}
    />
    <CardBody >
      <CardTitle tag="h1" className="text-center">
        {character.name}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted text-center mt-5"
        tag="h4">
        <p>{character.species}: {character.status}</p>
        <p>Location: {character.location.name}</p>
        <p>Origin: {character.origin.name}</p>
      </CardSubtitle>
      </CardBody>
      </section>
      <CardText tag="h6" className="mt-3">
      <p>Episodes:</p>
      {episodes.map(e => {
        return (
            <div>
           {e.name}
           {e.airDate}
           </div>
        )
        
      })}
      </CardText>  
  </Card>


    
)
}






{/* <CardText>
This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
</CardText>
<CardText>
<small className="text-muted">
  Last updated 3 mins ago
</small>
</CardText> */}





