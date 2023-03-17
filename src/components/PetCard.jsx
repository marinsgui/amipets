import { Link } from 'react-router-dom'

import style from '../styles/PetCard.module.css'

export default function PetCard({ pet }) {
    return (
        <li className={style.container}>
            <img src={pet.image} alt='Foto do pet' />
            <h2>{pet.firstName}</h2>
            <p>{pet.gender}</p>
            <Link to={`/detalhes/${pet.id}`}>Veja mais</Link>
        </li>
    )
}