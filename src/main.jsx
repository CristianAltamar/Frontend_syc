import { CreateProvider } from './context/createContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CreateProvider>
    <App />
  </CreateProvider>,
)
