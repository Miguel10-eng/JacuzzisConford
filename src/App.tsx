import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { PiscinasPage } from './pages/PiscinasPage'
import { SaunasPage } from './pages/SaunasPage'
import { EquiposPage } from './pages/EquiposPage'
import { JacuzziSizePage } from './pages/JacuzziSizePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/piscinas" element={<PiscinasPage />} />
      <Route path="/saunas" element={<SaunasPage />} />
      <Route path="/equipos" element={<EquiposPage />} />
      <Route path="/jacuzzis" element={<JacuzziSizePage />} />
      <Route path="/jacuzzis/:personas" element={<JacuzziSizePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
