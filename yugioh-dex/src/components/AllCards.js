import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardDeck, ListGroup, ListGroupItem } from "react-bootstrap";

function AllCards() {
  const [cardData, setCardData] = useState([]);

  const getCard = () => {
    axios
      .get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
      .then((response) => {
        console.log(response.data.data[0].card_images[0].image_url_small);
        const myData = response.data.data;
        setCardData(myData);
      })
      .catch((err) => err);
  };

  const renderCard = (cardData, index) => {
    return (
      <Card style={{ width: "100%", placeSelf: "center"}} key={index}>
        <Card.Body>
          <Card.Title>{cardData.name}</Card.Title>
          <Card.Text>{cardData.desc}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Card Type: {cardData.type}</ListGroupItem>
          <ListGroupItem>Attack: {cardData.atk} --> Defense: {cardData.def}</ListGroupItem>
          <ListGroupItem>Race: {cardData.race} </ListGroupItem>
          <ListGroupItem>Level: {cardData.level} </ListGroupItem>
        </ListGroup>
      </Card>
    );
  };

  useEffect(() => {
    getCard();
  }, []);
  return (
    <div className="AllCards">
        <CardDeck style={{display: "grid", gridTemplateColumns: "repeat(6, 200px)", gridGap: "2em", justifyItems: "center", justifyContent: "space-evenly"}}>
            {cardData.map(renderCard)}
        </CardDeck>
    </div>
  );
}

export default AllCards;
