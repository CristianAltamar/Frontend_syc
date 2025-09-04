import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products.jsx';
import Clients from './pages/Clients.jsx';
import Suppliers from './pages/Suppliers.jsx';
import QuotesClients from './pages/QuotesClients.jsx';
import { CreatePage } from './pages/Create.jsx';
//import QuotesSuppliers from './pages/QuotesSuppliers.jsx';

function App() {
  return (
    <BrowserRouter>
        <nav style={{ display:'flex', gap:12, padding:8, borderBottom:'1px solid #ddd' }}>
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/clients">Clientes</Link>
          <Link to="/suppliers">Proveedores</Link>
          <Link to="/quotes/clients">Cotizaciones de clientes</Link>
          {/* <Link to="/cotizaciones/proveedores">Cotizaciones de proveedores</Link> */}
        </nav>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/quotes/clients" element={<QuotesClients />} />
          {/* <Route path="/quotes/suppliers" element={<QuotesSuppliers />} /> */}
          <Route path="/create/*" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
