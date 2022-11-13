import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Items() {
  const cardInfo = [
    {
      image: "../images/items/1.jpg",
      title: "rock#1",
      price: "$43",
      text: "Bunch of random stuff to take up some room for a bit.",
    },
    {
      image: "",
      title: "rock#2",
      price: "$4",
      text: " Bunch of random stuff to take up some room for a bit.",
    },
    {
      image: "",
      title: "rock#3",
      price: "$14",
      text: "Bunch of random stuff to take up some room for a bit.",
    },
    {
      image: "",
      title: "rock#4",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };

  return <div className="Shopping">{cardInfo.map(renderCard)}</div>;
}

export default Items;
