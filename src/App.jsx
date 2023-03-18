import Header from "./components/Header"
import Footer from "./components/Footer"

import { Routes, Route } from 'react-router-dom'
import { useState } from "react"

import Home from "./pages/Home"
import Pets from "./pages/Pets"
import Detalhes from "./pages/Detalhes"

import { ThemeContext } from "./context/ThemeContext"

function App() {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme((curr) => curr === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="App">
      <Header />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>
      </ThemeContext.Provider>
      <Footer />
    </div>
  )
}

export default App
