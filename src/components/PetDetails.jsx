import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import style from '../styles/PetDetails.module.css'

export default function PetDetails() {
    const [pet, setPet] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
        .then(resp => resp.json())
        .then(data => {
            setPet(data)
            console.log(data)
        })
    }, [])

    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src={pet.image} alt="Foto do pet" />
            </div>
            <div className={style.info}>
                <h2>{pet.firstName}</h2>
                <ul className={style.petInfo}>
                    <li>{pet.gender}</li>
                    <li>{pet.eyeColor}</li>
                    <li>{pet.username}</li>
                    <li>{pet.password}</li>
                </ul>
                <a href='#'>Entre em contato</a>
            </div>
        </div>
    )
}