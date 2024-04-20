import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

export default function CharacterCard(props) {
  
  return (
    <Card className="my-3"
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
          {props.species} {props.status}
        </CardSubtitle>
        <CardText>
          <p>Location: {props.location.name}</p>
          <p>Origin: {props.origin.name}</p>
        </CardText>
      </CardBody>
    </Card>
  )
}
