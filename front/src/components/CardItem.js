import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function CardItem({
  details,
  cardData,
  incrementHandler,
  remove,
  updateSum,
}) {

  
  const navigate = useNavigate();

  const showDetails=() => {

    navigate(`/products/${cardData.id}`)
  };

  const stars=[...Array(5)].map((item,i) => {

    return (<sapn style={{color:cardData.rating>=i? "gold": "gray"}}>☆</sapn>)
  })

  return (
    <Card
      style={{
        width: "18rem",
        margin: "30px",
        textAlign: "center",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        backgroundColor: "#AFEEEE",
        padding: "20px",
      }}
    >
      <Card.Img
        variant="top"
        src={cardData.image}
        style={{ width: "250px", height: "230px" }}
      />
      <Card.Body>
        <Card.Title>{cardData.name}</Card.Title>

        {details&&<Card.Title>{cardData.brand}</Card.Title>}

        <Card.Text style={{ fontFamily: "cursive" }}>
          {cardData.price} $
        </Card.Text>

        <span>{stars}</span>

        <div style={{ display: "flex", marginBottom: "30px" , justifyContent: 'center' , gap:'20px' }}>
          <Button
            variant="primary"
            onClick={() => {
              incrementHandler(cardData.id, false);
              updateSum(cardData.price, false);
            }}
          >
            -
          </Button>
          <span> {cardData.qte} </span>
          <Button
            variant="success"
            onClick={() => {
              incrementHandler(cardData.id, true);
              updateSum(cardData.price, true);
            }}
          >
            +
          </Button>{" "}
          
        </div>

        <Button
          variant="danger"
          onClick={() => {
            remove(cardData.id);
            updateSum((cardData.price * cardData.qte), false);
          }}
        >
          delete
        </Button>

          <br />

        <Button variant="light" style={{margin: "30px"}} onClick={showDetails}>
          More Details <Badge bg="Secondary" style={{ border: "solid black 1px" }}> ✨ </Badge>
        </Button>

      </Card.Body>
    </Card>
  );
}
