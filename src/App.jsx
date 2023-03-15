import Header from "./components/Header"

import catAndDogImage from './assets/cat-and-dog-animate.svg'
import amiPetsLogo from './assets/amipets-logo.svg'

import './App.css'


function App() {
  

  return (
    <div className="App">
      <Header />
      <section>
        <h1>
          <img src={amiPetsLogo} alt="amiPets Logo" />
        </h1>
        <a href="#" className='link'>Ver pets disponíveis para adoção</a>
        <img src={catAndDogImage} alt="Cat and Dog animated" />
      </section>
    </div>
  )
}

export default App
