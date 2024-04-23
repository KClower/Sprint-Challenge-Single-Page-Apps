import React from "react";
import {
Card,
CardHeader,
ListGroup,
ListGroupItem,
} from "reactstrap";



export default function EpisodeCard(props){

    return (

        <Card
  style={{
    width: '18rem'
  }}
>
  <CardHeader>
    {props.name}
  </CardHeader>
  <ListGroup flush>
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
</Card>
    )
}