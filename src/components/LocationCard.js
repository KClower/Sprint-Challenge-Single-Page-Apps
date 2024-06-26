import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "reactstrap";




export default function LocationCard({ name, type, dimension, residents }) {

  return (
    <Card data-cy="locationCard" className="my-3"
      style={{
        width: '18rem'
      }}
    >
      <CardHeader data-cy="locationName" className="fw-bold">
        {name}
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem data-cy="locationDesc">
          {type}: {dimension}
        </ListGroupItem>
        <ListGroupItem data-cy="locationResidents" className="fw-light fst-italic">
          Residents: {residents.length}
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
}
