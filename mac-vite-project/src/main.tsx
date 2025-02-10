import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.tsx'
import Portfolio from './components/pages/Portfolio.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='/portfolio' element={<Portfolio />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
