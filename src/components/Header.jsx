import style from '../styles/Header.module.css'

import amiPetsLogo from '../assets/amipets-logo.svg'

import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className={style.header}>
            <div>
                <Link to="/">
                    <img src={amiPetsLogo} alt="amiPets Logo" />
                </Link>
            </div>
            <nav className={style.navbar}>
                <ul>
                    <li>
                        <Link to='/about'>Sobre</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}