import React from "react";
import { useHistory } from "react-router-dom";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

export default function CharacterCard(props) {


  let history = useHistory();

  const clickHandler = () => {
    history.push(`/SelectedCharacterCard/${props.id}`, props.character)
  }
  console.log(props)
  return (
    <Card data-cy={`characterCard-${props.id}`} onClick={clickHandler} className="my-3"
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="character image"
        src={props.image}
      />
      <CardBody>
        <CardTitle data-cy="cardTitle" tag="h5" className="mb-3">
          {props.name}
        </CardTitle>
        <CardSubtitle data-cy="cardSubtitle"
          className="mb-3 text-muted"
          tag="h6"
        >
          {props.species}: {props.status}
        </CardSubtitle>
        <CardText data-cy="cardLocation" className="mb-0">
          Location: {props.location.name}
        </CardText>
        <CardText data-cy="cardOrigin">
          Origin: {props.origin.name}
        </CardText>
        <CardText data-cy="cardEpisode" className="fw-light fst-italic">
          Episodes: {props.episodes.length}
        </CardText>
      </CardBody>
    </Card>
  )
}
