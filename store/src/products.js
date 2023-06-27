const products = [
  {
    id: 'price_1NNJuHCZMYzNjxDggAyVZ2oW',
    title: 'Mahomes',
    price: 150.0,
  },
  {
    id: 'price_1NNJulCZMYzNjxDg17OmKhme',
    title: 'Sunrise',
    price: 150.0,
  },
  {
    id: 'price_1NNJv9CZMYzNjxDgQGV0hWXo',
    title: 'Sunset',
    price: 150.0,
  },
]

const getProductData = id => {
  let productData = products.find(item => item.id === id)
  if (productData === undefined) {
    return undefined
  }
  return productData
}

export { products, getProductData }
