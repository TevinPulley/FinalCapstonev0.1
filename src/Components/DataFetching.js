import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Button } from "react-bootstrap";

function DataFetching() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/items").then((res) => {
      console.log(res);
      setItems(res.data);
    });
  }, []);
  return (
    <Row xs={2} md={3} lg={4} className="g-4">
      {items.map((item) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Card.Text>{item.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button> Add to Cart </Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DataFetching;
