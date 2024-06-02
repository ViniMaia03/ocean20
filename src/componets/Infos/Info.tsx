import styles from './Info.module.scss'
import Image from 'next/image'
import Section1 from '@/assets/section1.png'

export default function Info() {
    return(
        <>
            <section className={styles.info} id='info'>
                <div className={styles.div_txt_info}>
                    <h2 className={styles.titulo_info}> Conscientização </h2>
                    <p className={styles.subtitulo_info}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quas porro libero quos non necessitatibus iure animi natus fugit accusantium consequuntur mollitia aspernatur deleniti voluptates aut, distinctio, a fuga ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, similique? Quaerat culpa accusantium quis amet quos, dolorem dolore enim sit minima perspiciatis consequuntur incidunt, eos ipsa pariatur reprehenderit quia sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae reiciendis, quia harum cumque pariatur cum laboriosam, placeat sequi necessitatibus hic saepe consequuntur iste animi! Blanditiis dolorem incidunt voluptatum omnis. </p>
                </div>

                <div className={styles.div_img_info}>   
                    <Image src={Section1} alt='Cavalo marinho sofrendo com a poluição marinha' className={styles.img_info}/>
                </div>
            </section>
        </>
    )
}