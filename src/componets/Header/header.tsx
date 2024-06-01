import styles from './header.module.scss'

export default function Header() {
    return(
        <>
            <header className={styles.header}>
                <nav className={styles.menu}>
                    <ul className={styles.nav}>
                        <li className={styles.item}> <a href="#"> S.O.S </a></li>
                        <li className={styles.item}> <a href="#"> Conscientização </a></li>
                        <li className={styles.item}> <a href="#"> ONG's </a> </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}