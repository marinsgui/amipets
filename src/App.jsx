import Header from "./components/Header"

import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Pets from "./pages/Pets"
import Detalhes from "./pages/Detalhes"
import Footer from "./components/Footer"

function App() {
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
