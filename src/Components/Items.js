import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import pic from "../images/items/1.png";
import pic2 from "../images/items/2.png";
import pic3 from "../images/items/3.png";
import pic4 from "../images/items/4.png";
import pic5 from "../images/items/5.png";
import pic6 from "../images/items/6.png";
import pic7 from "../images/items/7.png";

import Button from "react-bootstrap/Button";

function Items() {
  const cardInfo = [
    {
      image: pic,
      title: "rock#1",
      price: "$43",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 0,
    },
    {
      image: pic2,
      title: "rock#2",
      price: "$4",
      text: " Bunch of random stuff to take up some room for a bit.",
      index: 1,
    },
    {
      image: pic3,
      title: "rock#3",
      price: "$14",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 2,
    },
    {
      image: pic4,
      title: "rock#4",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 3,
    },
    {
      image: pic5,
      title: "rock#5",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 4,
    },
    {
      image: pic6,
      title: "rock#6",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 5,
    },
    {
      image: pic7,
      title: "rock#7",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 6,
    },
    {
      image: pic,
      title: "rock#8",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 7,
    },
    {
      image: pic2,
      title: "rock#9",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 8,
    },
    {
      image: pic3,
      title: "rock#10",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 9,
    },
    {
      image: pic4,
      title: "rock#11",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 10,
    },
    {
      image: pic5,
      title: "rock#12",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 11,
    },
    {
      image: pic6,
      title: "rock#13",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 12,
    },
    {
      image: pic7,
      title: "rock#14",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 13,
    },
    {
      image: pic,
      title: "rock#15",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 14,
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Row xs={1} md={2} lg={3} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Card.Text>{card.price}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button> Add to Cart </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  // const renderCard = (card, index) => {
  //   return (
  //     <Row xs={2} md={3} lg={4} className="g-4">
  //       {Array.from({ length: 1 }).map((_, idx) => (
  //         <Col>
  //           <Card className="itemCard">
  //             <Card.Img variant="top"></Card.Img>
  //             <Card.Body>
  //               <Card.Title>{card.title}</Card.Title>
  //               <Card.Text>{card.text}</Card.Text>
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       ))}
  //     </Row>
  //   );

  return <div className="Shopping">{cardInfo.map(renderCard)}</div>;
}

export default Items;
