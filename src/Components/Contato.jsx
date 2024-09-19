import React from 'react'
import styles from './Contato.module.css';
import imagem from '../assets/maquina1.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description='Entre em contato' />
      <img src={imagem} alt="imagem"/>
      <div>
      <h1>Entre em contato.</h1>
      <ul className={styles.dados}>
        <li>estivalet61@gmail.com</li>
        <li>(53)98144-7700</li>
        <li>Rua Uruguai,1261</li>
      </ul>
      </div>
    </section>
  )
}

export default Contato
