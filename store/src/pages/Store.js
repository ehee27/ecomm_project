import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { products } from '../products'
import ProductCard from '../components/ProductCard'

const Store = () => {
  return (
    <>
      <h1>Welcome to the store</h1>
      <Row xs={1} md={3} className="g-4">
        {products.map(item => (
          <Col align="center" key={item.id}>
            <ProductCard productData={item} />
            {/* <h3>{item.title}</h3>
            <h5>${item.price}</h5> */}
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store
