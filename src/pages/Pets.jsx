import { useState, useEffect } from "react"

import PetCard from "../components/PetCard"

import style from '../styles/Pets.module.css'

export default function Pets() {
    const [pets, setPets] = useState([])
    
    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(resp => resp.json())
        .then(data => setPets(data.users))
        .catch(err => console.log(err))
    }, [])
    
    return (
        <main className={style.container}>
            <h1>Pets disponíveis para adoção</h1>
                {pets.length > 0 && (
                    <ul className={style.petList}>
                        {pets.map((pet) => (
                            <PetCard key={pet.id} pet={pet} />
                        ))}
                    </ul>
                )}
        </main>
    )
}