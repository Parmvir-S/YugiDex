import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardDeck, ListGroup, ListGroupItem } from "react-bootstrap";
import { slice, concat} from 'lodash';
import "./AllCards.css";

function AllCards() {
  const [cardData, setCardData] = useState([]);
  const LIMIT = 12;

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(cardData, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () =>{
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (cardData.length - 1);
    const newList = concat(list, slice(cardData, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }


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
            {list.map(renderCard)}
        </CardDeck>
        {showMore && <button onClick={loadMore}> More Cards </button>}
    </div>
  );
}

export default AllCards;
