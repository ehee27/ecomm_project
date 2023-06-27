import { Card, Button, Form, Row, Col } from 'react-bootstrap'

const ProductCard = ({ productData }) => {
  const { title, price } = productData
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h5>${price}</h5>
        <Button variant="secondary">Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
