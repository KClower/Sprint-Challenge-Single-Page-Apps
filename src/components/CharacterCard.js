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
    <Card onClick={clickHandler} className="my-3"
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="character image"
        src={props.image}
      />
      <CardBody>
        <CardTitle tag="h5">
          {props.name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {props.species}: {props.status}
        </CardSubtitle>
        <CardText>
          <p>Location: {props.location.name}</p>
          <p>Origin: {props.origin.name}</p>
        </CardText>
        <CardText className="fw-light fst-italic">
          <p>Episodes: {props.episodes.length}</p>
        </CardText>
      </CardBody>
    </Card>
  )
}
