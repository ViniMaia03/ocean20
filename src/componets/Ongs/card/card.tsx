import styles from '../Ongs.module.scss'
import Image from 'next/image'
import oceana from '@/assets/oceana.png'
import voices from '@/assets/voices.png'
import aquasis from '@/assets/aquasis.png'

export default function Card() {
    return(
        <>
            <div className={styles.div_card}>
                    <div className={styles.card}>
                        <h3 className={styles.titulo_card}> Oceana </h3>
                        <Image src={oceana} alt='QR Code da ONG Oceana' className={styles.img_card} />
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.titulo_card}> Voices of The Ocean </h3>
                        <Image src={oceana} alt='QR Code da ONG Oceana'className={styles.img_card} />
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.titulo_card}> Aquasis </h3>
                        <Image src={oceana} alt='QR Code da ONG Oceana' className={styles.img_card} />
                    </div>
                </div>
        </>
    )
}