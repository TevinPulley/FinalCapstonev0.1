import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import pic from "../images/1.png";
import Button from "react-bootstrap/Button";

function Items() {
  const cardInfo = [
    {
      image: { pic },
      title: "jeff",
      price: "$43",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 0,
    },
    {
      image: "",
      title: "rock#2",
      price: "$4",
      text: " Bunch of random stuff to take up some room for a bit.",
      index: 1,
    },
    {
      image: "",
      title: "rock#3",
      price: "$14",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 2,
    },
    {
      image: "",
      title: "rock#4",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 3,
    },
    {
      image: "",
      title: "rock#5",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 4,
    },
    {
      image: "",
      title: "rock#6",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 5,
    },
    {
      image: "",
      title: "rock#7",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 6,
    },
    {
      image: "",
      title: "rock#8",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 7,
    },
    {
      image: "",
      title: "rock#9",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 8,
    },
    {
      image: "",
      title: "rock#10",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 9,
    },
    {
      image: "",
      title: "rock#11",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 10,
    },
    {
      image: "",
      title: "rock#12",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 11,
    },
    {
      image: "",
      title: "rock#13",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 12,
    },
    {
      image: "",
      title: "rock#14",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 13,
    },
    {
      image: "",
      title: "rock#15",
      price: "$32",
      text: "Bunch of random stuff to take up some room for a bit.",
      index: 14,
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Row xs={1} md={2} className="g-4">
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
