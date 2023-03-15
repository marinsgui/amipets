import style from '../styles/Home.module.css'

import catAndDogImage from '../assets/cat-and-dog-animate.svg'
import amiPetsLogo from '../assets/amipets-logo.svg'

import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className={style.container}>
            <h1>
                <img src={amiPetsLogo} alt="amiPets Logo" />
            </h1>
            <Link to="/pets" className={style.link}>
                Ver pets disponíveis para adoção
            </Link>
            <img src={catAndDogImage} alt="Cat and Dog animated" />
        </section>
    )
}