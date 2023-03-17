import style from '../styles/Loading.module.css'

import loading from '../assets/loading.svg'

export default function Loading() {
    return (
        <div className={style.loader}>
            <img src={loading} alt="Loading" />
        </div>
    )
}