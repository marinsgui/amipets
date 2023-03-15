import Header from "./components/Header"

import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Pets from "./pages/Pets"
import Detalhes from "./pages/Detalhes"

function App() {
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/detalhes" element={<Detalhes />} />
      </Routes>
    </div>
  )
}

export default App
