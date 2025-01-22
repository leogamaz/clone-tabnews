import React from 'react';
import Head from 'next/head';
import styles from './styles.module.css';

function Home() {
  return (
    <>
      <Head>
        <title>Mensagem Especial</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Para Ana Carolina a Pessoa Mais Incrível</h1>
          <p className={styles.text}>
            Sei que hoje foi um dia difícil, mas quero que você saiba que é muito mais forte
            do que qualquer desafio que possa surgir.
          </p>
          <p className={styles.text}>
            Sua luz, gentileza e talento são inquestionáveis. Quem não consegue enxergar isso
            não merece sua energia. Estou aqui para você, sempre! ❤️
          </p>
          <img 
            src="/motivational-image.jpg" 
            alt="Motivational"
            className={styles.image}
          />
          <p className={styles.signature}>Com amor, Leo</p>
        </div>
      </div>
    </>
  );
}

export default Home;
