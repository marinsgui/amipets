import Header from "./components/Header"

import catAndDogImage from './assets/cat-and-dog-animate.svg'

import './App.css'


function App() {
  

  return (
    <div className="App">
      <Header />
      <section>
        <h1>amiPets</h1>
        <a href="#">Ver pets disponíveis para adoção</a>
        <img src={catAndDogImage} alt="Cat and Dog animated" />
      </section>
    </div>
  )
}

export default App
