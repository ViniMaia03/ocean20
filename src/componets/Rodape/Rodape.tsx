import styles from './Rodape.module.scss'

export default function Rodape() {
    return (
        <>
            <footer className={styles.footer}>
                <span className={styles.copy}> Todos os direitos reservados &copy; - FIAP GLOBAL SOLUTION 2024/2 </span>

                <div className={styles.equipe}>
                    <h4 className={styles.titulo_equipe}> Integrantes: </h4>
                    <span className={styles.nome}> RM553844 - José Neto </span>
                    <span className={styles.nome}> RM553941 - Lorenzo Vaz </span>
                    <span className={styles.nome}> RM552969 - Vinicius Maia </span>
                </div>
            </footer>
        </>
    )
}