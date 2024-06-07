'use client'

import React, { useState } from "react";
import styles from './oceanos.module.scss'
import Image from "next/image";

export default function Oceanos() {

    const [selecionado, setSelecionado] = useState({ value: '', label: '', img: '', info: '' });
    const [imagem, setImagem] = useState('');
    const [informacoes, setInformacoes] = useState('');


    const oceanosInfo = [
        { value: '', label: '', img: '', info: '' },
        { value: 'atlantico', label: 'Atlântico', img: '/assets/oceano-atlantico.jpg', info: 'Informações sobre o Atlântico' },
        { value: 'pacifico', label: 'Pacífico', img: '/assets/oceano-atlantico.jpg', info: 'Informações sobre o Pacífico' },
        { value: 'indico', label: 'Índico', img: '/assets/oceano-atlantico.jpg', info: 'Informações sobre o Índico' },
        { value: 'artico', label: 'Ártico', img: '/assets/oceano-atlantico.jpg', info: 'Informações sobre o Ártico' },
        { value: 'antartico', label: 'Antártico', img: '/assets/oceano-atlantico.jpg', info: 'Informações sobre o Antártico' },
    ];

    return(
        <>
            <section className={styles.oceanos} id="oceanos">
                <label htmlFor="oceanos" className={styles.oceanos_titulo}> Selecione um oceano: </label>
                <select className={styles.oceanos_select} id="oceanos" value={selecionado.value} onChange={(e) => {
                    const selectedOcean = oceanosInfo.find(ocean => ocean.value === e.target.value);
                    setSelecionado(selectedOcean || { value: '', label: '', img: '', info: '' });
                }}>
                    {oceanosInfo.map((oceano) => (
                        <option key={oceano.value} value={oceano.value}>
                            {oceano.label}
                        </option>
                    ))}
                </select>

                <div>
                    <Image src={selecionado.img} alt={selecionado.label} width={300} height={300} className={styles.img_oceanos} />
                    <p>{selecionado.info}</p>
                </div>
            </section>
        </>
    )
} 