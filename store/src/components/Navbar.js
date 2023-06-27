import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartProduct from './CartProduct'

function NavbarComponent() {
  const cart = useContext(CartContext)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (response.url) {
          window.location.assign(response.url) // Forwarding user to Stripe
        }
      })
  }

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  )

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success" onClick={checkout}>
                Purchase items!
              </Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavbarComponent
// import { useState, useContext } from 'react'
// import { Button, Container, Navbar, Modal } from 'react-bootstrap'
// import { CartContext } from '../context/CartContext'
// import CartProduct from './CartProduct'

// const NavbarComponent = () => {
//   //
//   const cart = useContext(CartContext)
//   //
//   const [show, setShow] = useState(false)
//   //
//   const handleClose = () => setShow(false)
//   const handleShow = () => setShow(true)
//   //
//   const checkout = async () => {
//     await fetch('http://localhost:4000/checkout', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ items: cart.items }),
//     })
//       .then(response => {
//         return response.json()
//       })
//       .then(response => {
//         if (response.url) {
//           window.location.assign(response.url)
//         }
//       })
//   }
//   //
//   const productsCount = cart.items.reduce(
//     (sum, product) => sum + product.quantity,
//     0
//   )
//   return (
//     <>
//       <Navbar expand="sm">
//         <Navbar.Brand href="/">TwoSeven</Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Button onClick={handleShow}>
//             Cart {productsCount}{' '}
//             {productsCount > 1 ? <span>items</span> : <span>item</span>}
//           </Button>
//         </Navbar.Collapse>
//       </Navbar>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Shopping Cart</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {productsCount > 0 ? (
//             <>
//               <p>Items in your cart:</p>
//               {cart.items.map((currentProduct, idx) => (
//                 <CartProduct
//                   key={idx}
//                   id={currentProduct.id}
//                   quantity={currentProduct.quantity}
//                 />
//               ))}
//               <h3>Total: {cart.getTotalCost().toFixed(2)}</h3>
//               <Button variant="success" onClick={checkout}>
//                 Purchase items!
//               </Button>
//             </>
//           ) : (
//             <h2>There are no items in your cart.</h2>
//           )}
//         </Modal.Body>
//       </Modal>
//     </>
//   )
// }

// export default NavbarComponent
