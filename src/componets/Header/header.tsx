import styles from './header.module.scss'

export default function Header() {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.cabecalho}>
                    <nav className={styles.menu}>
                        <ul className={styles.nav}>
                            <li className={styles.item}> <a href="#sos"> S.O.S </a></li>
                            <li className={styles.item}> <a href="#info"> Conscientização </a></li>
                            <li className={styles.item}> <a href="#ong"> ONG's </a> </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}