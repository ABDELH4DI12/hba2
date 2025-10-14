import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import InterventionsMediasPage from './pages/InterventionsMediasPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/interventions-medias" element={<InterventionsMediasPage />} />
      </Routes>
    </Router>
  )
}


export default App
