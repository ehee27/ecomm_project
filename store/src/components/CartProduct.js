import { Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { getProductData } from '../products'

const CartProduct = product => {
  const cart = useContext(CartContext)
  const { id, quantity } = product
  const productData = getProductData(id)
  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${quantity * productData.price.toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteOneFromCart(id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  )
}

export default CartProduct
