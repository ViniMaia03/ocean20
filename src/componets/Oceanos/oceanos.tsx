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
        { value: 'atlantico', label: 'Atlântico', img: '/assets/section1.png', info: 'Informações sobre o Atlântico' },
        { value: 'pacifico', label: 'Pacífico', img: 'url_para_imagem_pacifico', info: 'Informações sobre o Pacífico' },
        { value: 'indico', label: 'Índico', img: 'url_para_imagem_indico', info: 'Informações sobre o Índico' },
        { value: 'artico', label: 'Ártico', img: 'url_para_imagem_artico', info: 'Informações sobre o Ártico' },
        { value: 'antartico', label: 'Antártico', img: 'url_para_imagem_antartico', info: 'Informações sobre o Antártico' },
    ];

    return(
        <>
            <section className={styles.oceanos}>
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
                    <Image src={selecionado.img} alt={selecionado.label} width={300} height={300}/>
                    <p>{selecionado.info}</p>
                </div>
            </section>
        </>
    )
} 