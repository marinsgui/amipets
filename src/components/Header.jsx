import style from '../styles/Header.module.css'

import amiPetsLogo from '../assets/amipets-logo.svg'

export default function Header() {
    return (
        <header className={style.header}>
            <div>
                <a href="#">
                    <img src={amiPetsLogo} alt="amiPets Logo" />
                </a>
            </div>
            <nav className={style.navbar}>
                <ul>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}