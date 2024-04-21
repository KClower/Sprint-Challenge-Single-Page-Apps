import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
}from "reactstrap";




export default function LocationCard({ name, type, dimension, residents }) {
  
  return (
  <Card className="my-3"
  style={{
    width: '18rem'
  }}
>
  <CardHeader className="fw-bold">
    {name}
  </CardHeader>
  <ListGroup flush>
    <ListGroupItem>
      {type}: {dimension}
    </ListGroupItem>
    <ListGroupItem className="fw-light fst-italic">
     Residents: {residents.length}
    </ListGroupItem>
    
  </ListGroup>
</Card>
  )
}
