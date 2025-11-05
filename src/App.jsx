import styles from './App.module.css'
import perfil from '../public/foto3.jpg'
import facebookIcon from '../public/facebook.png'
import instagramIcon from '../public/instagram.png'
import githubIcon from '../public/github.png'
import whatsappIcon from '../public/ww.png'
import htmlimg from '../public/HTML.jpg'
import cssImg from '../public/css.jpg'
import jsImg from '../public/js.jpg'
import viteImg from '../public/vite.png'
import reactImg from '../public/React.png'
import vercelImg from '../public/Vercel.png'

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
        <section className={styles.s2} id='s2'>
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>
            <div className={styles.card}>
              <img width={100}  src={htmlimg} alt="HTML" />
              <h3>HTML</h3>
              <p>HTML é a sigla para Hypertext Markup Language (Linguagem de Marcação de Hipertexto) e é a linguagem de marcação padrão usada para criar e estruturar páginas da web</p>
            </div>
            <div className={styles.card}>
              <img width={100} src={cssImg} alt="CSS" />
              <h3>CSS</h3>
              <p>CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação visual de um documento escrito em linguagem de marcação como HTML.</p>
            </div>
            <div className={styles.card}>
              <img width={100} src={jsImg} alt="JS" />
              <h3>JS</h3>
              <p>JavaScript é uma linguagem de programação leve, interpretada e versátil, usada para tornar páginas da web dinâmicas e interativas</p>
            </div>
            <div className={styles.card}>
              <img width={100} src={viteImg} alt="Vite"/>
              <h3>Vite JS</h3>
              <p>Vite JS é uma ferramenta moderna de construção de front-end que proporciona uma experiência de desenvolvimento mais rápida e eficiente para projetos web.</p>
            </div>
            <div className={styles.card}>
              <img width={100} src={reactImg} alt="React" />
              <h3>React</h3>
              <p>React (também conhecido como React.js ou ReactJS) é uma biblioteca JavaScript de código aberto e focada no desenvolvimento de interfaces de usuário (UI), especialmente para aplicações de página única (SPAs)</p>
            </div>
            <div className={styles.card}>
              <img width={100} src={vercelImg} alt="Vercel" />
              <h3>Vercel</h3>
              <p>Vercel é uma plataforma de nuvem que facilita o desenvolvimento e a implantação de sites e aplicativos web modernos.</p>
            </div>
          </div>
          
        </section>
        <section id='s3'>
          <h2>sessão 3</h2>
        </section>
        <section id='s4'>
          <h2>sessão 4</h2>
        </section>
      </main>
      <footer className={styles.rodape}>
        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={facebookIcon} alt="Facebook" /></a>
        <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={instagramIcon} alt="Instagram" /></a>
        <a href="https://www.github.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={githubIcon} alt="Linkedin" /></a>
        <a href="https://www.whatsapp.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={whatsappIcon} alt="WhatsApp" /></a>
      </footer>
    </>
  )
}

export default App
