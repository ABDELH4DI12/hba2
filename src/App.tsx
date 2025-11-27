import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import InterventionsMediasPage from './pages/InterventionsMediasPage'
import { ScrollToTop } from './components/scroll-to-top'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/interventions-medias" element={<InterventionsMediasPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}


export default App

