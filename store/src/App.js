import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/Navbar'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Store from './pages/Store'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

function App() {
  return (
    <Container>
      <NavbarComponent></NavbarComponent>
      <Router>
        <Routes>
          <Route index element={<Store />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
