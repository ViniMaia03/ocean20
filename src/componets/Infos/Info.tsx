import styles from './Info.module.scss'
import Image from 'next/image'
import Section1 from '@/assets/section1.png'

export default function Info() {
    return(
        <>
            <section className={styles.info} id='info'>
                <div className={styles.div_txt_info}>
                    <h2 className={styles.titulo_info}> Conscientização </h2>
                    <p className={styles.subtitulo_info}> A poluição marinha, com 80% proveniente de atividades terrestres, resulta na entrada anual de 8 milhões de toneladas de plástico nos oceanos, ameaçando ecossistemas e a saúde pública. Sem ações significativas, em 2050 haverá mais plástico que peixes, em peso, nos oceanos. Campanhas aumentaram o conhecimento sobre o problema em 70%, mas apenas 25% das pessoas adotaram práticas sustentáveis. A ingestão de microplásticos por espécies marinhas afeta 10% delas, entrando na cadeia alimentar humana. Medidas urgentes e cooperativas entre governos, empresas e indivíduos são essenciais para mitigar esse impacto e preservar nossos oceanos. </p>
                </div>

                <div className={styles.div_img_info}>   
                    <Image src={Section1} alt='Cavalo marinho sofrendo com a poluição marinha' className={styles.img_info}/>
                </div>
            </section>
        </>
    )
}