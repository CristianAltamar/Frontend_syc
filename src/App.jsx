import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products.jsx'

function App() {
  return (
    <BrowserRouter>
        <nav style={{ display:'flex', gap:12, padding:8, borderBottom:'1px solid #ddd' }}>
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/clientes">Clientes</Link>
          <Link to="/ventas">Ventas</Link>
          <Link to="/reportes">Reportes</Link>
        </nav>
        <Routes>
          <Route path="/productos" element={<Products />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
