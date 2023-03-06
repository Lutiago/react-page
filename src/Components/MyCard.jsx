// import React from "react";

// export functionimport Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';


export function MyCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://design-milk.com/images/2022/05/leadimage-designdanmarkpattern-designmilkshop-385x252.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    
    
  );
}
