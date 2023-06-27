const products = [
  {
    id: '1',
    title: 'Product Title 1',
    price: 150.0,
  },
  {
    id: '2',
    title: 'Product Title 2',
    price: 150.0,
  },
  {
    id: '3',
    title: 'Product Title 3',
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
