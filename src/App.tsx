import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { Cars } from './pages/Cars'
import { Drivers } from './pages/Drivers'
import { Gallery } from './pages/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
