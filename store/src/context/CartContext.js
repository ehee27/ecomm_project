import { createContext, useState } from 'react'
import { products } from '../products'

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  deleteOneFromCart: () => {},
  deleteAllFromCart: () => {},
  getTotalCost: () => {},
})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  //-------- GET QUANTITY -------------------------------------------------
  const getProductQuantity = id => {
    let quantity = cartProducts.find(item => item.id === id)?.quantity
    if (quantity === 0) {
      return 0
    }
    return quantity
  }
  //-------- ADD PRODUCT -------------------------------------------------
  const addToCart = id => {
    const quantity = getProductQuantity(id)
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }])
    } else {
      setCartProducts(
        cartProducts.map(item =>
          item.id === id ? { ...item, quantity: item.quantity } : item
        )
      )
    }
  }
  //-------- DELETE ONE -------------------------------------------------
  const deleteOneFromCart = id => {}
  //-------- DELETE ALL -------------------------------------------------
  const deleteAllFromCart = id => {}
  //-------- GET TOTAL -------------------------------------------------
  const getTotalCost = id => {}

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addToCart,
    deleteOneFromCart,
    deleteAllFromCart,
    getTotalCost,
  }
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}
