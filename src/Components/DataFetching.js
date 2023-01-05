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

// The function below was the original method used resulting in a single row.

// function GridExample() {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Card title</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }
