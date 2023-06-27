import { createContext, useState } from 'react'
import { getProductData } from '../products'

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
    const quantity = cartProducts.find(product => product.id === id)?.quantity
    if (quantity === undefined) {
      return 0
    }
    return quantity
  }

  //-------- ADD PRODUCT -------------------------------------------------
  const addToCart = id => {
    const quantity = getProductQuantity(id)
    // if it's 0, this will be the first product in the cart
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }])
    } else {
      // if not, map through, find the matching id, spread all existing attributes, and update the quantity, otherwise ( : ) return the product because it doesn't match
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      )
    }
  }

  //-------- DELETE ONE -------------------------------------------------
  const deleteOneFromCart = id => {
    const quantity = getProductQuantity(id)
    // if it's 1, we'll call the delet function with id
    if (quantity === 1) {
      deleteFromCart(id)
    } else {
      // if not same logic as addToCart
      setCartProducts(
        cartProducts.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      )
    }
  }

  //-------- DELETE ALL -------------------------------------------------
  // can we refactor into 'single line filter"?
  const deleteFromCart = id => {
    setCartProducts(cartProducts =>
      cartProducts.filter(product => {
        return product.id !== id
      })
    )
  }

  //-------- GET TOTAL -------------------------------------------------
  const getTotalCost = id => {
    // start with a total = 0
    let totalCost = 0
    // map through, put each product into the 'Data' func to expose all attributes, and immediately multiply the price by quantity
    // so this effectively STOPS on each product and runs the logic
    cartProducts.map(cartItem => {
      const productData = getProductData(cartItem.id)
      return (totalCost += productData.price * cartItem.quantity)
    })
    return totalCost
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addToCart,
    deleteOneFromCart,
    deleteFromCart,
    getTotalCost,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}
