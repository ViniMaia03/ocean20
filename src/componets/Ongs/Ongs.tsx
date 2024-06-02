import styles from './Ongs.module.scss'
import Card from './card/card'

export default function Ongs() {
    return(
        <>
            <section className={styles.ongs} id='ong'> 
                <div className={styles.div_txt_ong}>
                    <h2 className={styles.titulo_ong}> ONG's </h2>
                    <p className={styles.subtitulo_ong}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet odio optio cupiditate! Suscipit aperiam dignissimos quia hic quae corporis minima possimus, tempore laboriosam laudantium officiis dolore repellendus! In, nostrum? </p>
                </div>

                <Card />
            </section>
        </>
    )
}