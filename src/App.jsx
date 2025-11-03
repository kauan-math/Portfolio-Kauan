import styles from './App.module.css'
import perfil from '../public/foto3.jpg'

function App() {

  //javascript é em cima do return

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Video</a>
        <a href="#s4">Contato</a>
      </nav>
      <main>
        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={perfil} alt="Foto" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Kauan Matheus</h2>
            <p className={styles.paragraph}>Programador Iniciante, estudo no Primeiro Ano do Ensino Médio, Cursando um curso Técnico em Desenvolvimento de Sistemas no Senai</p>
          </div>
        </section>
        <section id='s2'>
          <h2>sessão 2</h2>
        </section>
        <section id='s3'>
          <h2>sessão 3</h2>
        </section>
        <section id='s4'>
          <h2>sessão 4</h2>
        </section>
      </main>
    </>
  )
}

export default App
