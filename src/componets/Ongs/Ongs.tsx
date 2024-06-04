import styles from './Ongs.module.scss'
import Card from './card/card'

export default function Ongs() {
    return(
        <>
            <section className={styles.ongs} id='ong'> 
                <div className={styles.div_txt_ong}>
                    <h2 className={styles.titulo_ong}> ONG's </h2>
                    <p className={styles.subtitulo_ong}> Nossos oceanos precisam de você! Contribua para a preservação da saúde marinha apoiando ONGs dedicadas a combater a poluição e proteger a vida aquática. Juntos, podemos fazer a diferença! </p>
                </div>

                <Card />
            </section>
        </>
    )
}