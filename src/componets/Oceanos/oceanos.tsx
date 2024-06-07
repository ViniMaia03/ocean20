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
        { value: 'atlantico', label: 'Atlântico', img: '/assets/oceano-atlantico.jpg', info: 'O Oceano Atlântico é o segundo maior oceano do mundo, cobrindo aproximadamente 106 milhões de quilômetros quadrados. Ele separa as Américas da Europa e da África, e é conhecido por sua importância histórica nas explorações e comércio. O Atlântico possui diversas correntes oceânicas, como a Corrente do Golfo, que influenciam os climas dos continentes adjacentes. É um oceano rico em biodiversidade, abrigando uma vasta gama de ecossistemas marinhos. Além disso, é uma via crucial para o transporte marítimo e possui recursos naturais significativos, incluindo pesca e reservas de petróleo.' },
        { value: 'pacifico', label: 'Pacífico', img: '/assets/oceano-atlantico.jpg', info: 'O Oceano Pacífico é o maior e mais profundo oceano do mundo, cobrindo cerca de 168 milhões de quilômetros quadrados. Ele se estende desde a América do Norte e do Sul até a Ásia e a Austrália, e é conhecido pela sua vasta extensão e profundidade, incluindo a Fossa das Marianas, o ponto mais profundo da Terra. O Pacífico abriga uma enorme diversidade de vida marinha e muitos ecossistemas únicos, como os recifes de coral. Suas correntes oceânicas, como a Corrente de Humboldt, desempenham um papel crucial no clima global. Além de ser uma rota vital para o comércio internacional, o Pacífico é rico em recursos naturais, incluindo pesca abundante e reservas de minerais e petróleo no fundo do mar.' },
        { value: 'indico', label: 'Índico', img: '/assets/oceano-atlantico.jpg', info: 'O Oceano Índico é o terceiro maior oceano do mundo, cobrindo cerca de 70 milhões de quilômetros quadrados. Ele está localizado entre a África, a Ásia, a Austrália e a Antártica, sendo conhecido por suas águas quentes e ricas em biodiversidade. O Índico desempenha um papel crucial no clima regional, influenciando os padrões das monções que afetam grande parte do sul da Ásia. Suas rotas marítimas são essenciais para o comércio global, especialmente para o transporte de petróleo e mercadorias entre o Oriente Médio, África e Ásia. Além disso, o oceano é uma importante fonte de recursos naturais, incluindo áreas ricas em pesca e depósitos de petróleo e gás natural.' },
        { value: 'artico', label: 'Ártico', img: '/assets/oceano-atlantico.jpg', info: 'O Oceano Ártico é o menor e mais raso dos oceanos do mundo, cobrindo cerca de 14 milhões de quilômetros quadrados. Localizado ao redor do Polo Norte, ele é caracterizado por suas condições extremas, com grande parte de sua superfície coberta por gelo marinho durante a maior parte do ano. O Ártico é crucial para a regulação do clima global, refletindo a radiação solar e influenciando os padrões climáticos. Este oceano abriga uma fauna única, incluindo ursos polares, focas e baleias. Com o derretimento do gelo devido às mudanças climáticas, o Ártico está se tornando uma nova fronteira para a navegação e exploração de recursos, incluindo petróleo e gás, apesar dos desafios ambientais e geopolíticos.' },
        { value: 'antartico', label: 'Antártico', img: '/assets/oceano-atlantico.jpg', info: 'O Oceano Antártico, também conhecido como Oceano Austral, circunda o continente da Antártica e cobre aproximadamente 20 milhões de quilômetros quadrados. É o quarto maior oceano do mundo e se distingue por suas águas frias e turbulentas, alimentadas pela Corrente Circumpolar Antártica, a corrente oceânica mais forte do planeta. O Oceano Antártico desempenha um papel vital na regulação do clima global e no ciclo de nutrientes dos oceanos. Suas águas abrigam uma rica biodiversidade, incluindo krill, focas, pinguins e baleias. Além disso, este oceano é fundamental para a pesquisa científica sobre mudanças climáticas, pois a região é um indicador sensível das transformações ambientais globais.' },
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

                <div className={styles.resultado}>
                    <p className={styles.desc}>{selecionado.info}</p>
                </div>
            </section>
        </>
    )
} 