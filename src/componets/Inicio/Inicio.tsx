import styles from './Inicio.module.scss'

export default function Inicio() {
    return (
        <>
            <section className={styles.inicio} id='sos'>
                <h1 className={styles.titulo}> S.O.S OCEANOS </h1>
                <p className={styles.subtitulo}> Nossos oceanos, vastos e misteriosos, estão clamando por ajuda. A poluição marinha é uma ameaça invisível, mas devastadora, que está destruindo ecossistemas inteiros e colocando em risco a vida marinha. O tempo para agir é agora. Cada segundo conta. </p>
            </section>
        </>
    )
}