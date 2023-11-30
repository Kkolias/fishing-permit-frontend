import styles from './Navbar.module.css'


export default function Navbar() {



    return (
        <div className={styles.wrapper}>
            <a href="/">Koti</a>
            <a href="/jou">Jou</a>
        </div>
    )
}

