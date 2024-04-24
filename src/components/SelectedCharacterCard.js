import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from "reactstrap";

export default function SelectedCharacterCard(props) {
    console.log(props.location.state)

    const character = props.location.state

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        const requests = character.episode.map(episode => axios.get(episode))
        // const requests = [axios.get(character.episode[0])]
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
        <>
            <Card data-cy={`selectedCharacterCard-${character.id}`}
                style={{
                    width: '100%'
                }}
            >
                <section className="d-flex">
                    <img style={{ width: '20rem' }}
                        alt="character image"
                        src={character.image}
                    />
                    <CardBody >
                        <CardTitle data-cy="characterName" tag="h1" className="text-center">
                            {character.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted text-center mt-5"
                            tag="h4">
                            <p data-cy="characterSpecies">{character.species}: {character.status}</p>
                            <p data-cy="characterLocation">Location: {character.location.name}</p>
                            <p data-cy="characterOrigin">Origin: {character.origin.name}</p>
                        </CardSubtitle>
                    </CardBody>
                </section>
            </Card>
            <div className="container">
                <CardText tag="h6" className="mt-3">
                    <p>Episodes:</p>
                </CardText>

                <div className="row gap-3">
                    {episodes.map(e => {
                        return (

                            <Card data-cy="episodeCard" className=" col-4 px-0"
                                style={{
                                    width: '14rem'
                                }}
                            >
                                <CardHeader data-cy="episodeName">
                                    {e.name}
                                </CardHeader>
                                <ListGroup flush>
                                    <ListGroupItem data-cy="episodeNumber">
                                        {e.episode}
                                    </ListGroupItem>
                                    <ListGroupItem data-cy="episodeDate">
                                        {e.airDate}
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </>



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





