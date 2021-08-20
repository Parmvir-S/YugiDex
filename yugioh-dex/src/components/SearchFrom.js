import { Form, Row, Col, Button, Card, ListGroupItem, ListGroup } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import "./SearchFrom.css";

const SearchFrom = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState([]);
  const [image, setImage] = useState("");

const getCard = () => {
    axios
    .get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`)
    .then((response) => {
      console.log(response.data.data[0]);
      console.log(response.data.data[0].card_images[0].image_url_small);
      const myData = response.data.data[0];
      const myImage = response.data.data[0].card_images[0].image_url_small
      setImage(myImage.toString());
      setCard(myData);
    })
    .catch((err) => err);
}

  return (
    <>
      <br/> 
      <br/>
      <Row>
        <Form.Label column lg={2}>
          Monsters, Spells and Traps
        </Form.Label>
        <Col>
          <Form.Control
            value={name}
            onInput={(e) => setName(e.target.value)}
            type="text"
            placeholder="Yugioh Card Name"
          />
        </Col>
      </Row>
      <br />
      <Button onClick={getCard} variant="info">Go</Button>


      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>
            {card.desc}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Card Type: {card.type}</ListGroupItem>
          <ListGroupItem>Attack: {card.atk}  Defense: {card.def}</ListGroupItem>
          <ListGroupItem>Race: {card.race} </ListGroupItem>
          <ListGroupItem>Level: {card.level} </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
};

export default SearchFrom;
