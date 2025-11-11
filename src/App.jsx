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

import { useState } from 'react'

function App() {

  const defaultPhoneNumber = '554192897222'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleZap = () => {
    const { name, email, message } = formData

    const urlzap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`

    window.open(urlzap, "_blank")
  }

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
              <img width={100} src={htmlimg} alt="HTML" />
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
              <img width={100} src={viteImg} alt="Vite" />
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
        <section id='s3' className={styles.s3}>
          <h2>Github repositorios</h2>
          <p>sadas</p>
        </section>

        <section id='s5' className={styles.s5}>

          <div class="card">
  <div class="card-content">
    <p class="card-title">Card hover effect
    </p><p class="card-para">Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit.</p>
 


          <h2>Minha Escola</h2>
          <p>Minha escola, mesmo com seus problemas, ainda é uma escola muito boa</p>
        </div> 
        </div>  
        </section>

        <section id='s4' className={styles.s4}>
          <h2>CONTATO</h2>
          <div className={styles.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required />
            <label htmlFor="email">Informe seu email</label>
            <input type="email" name='email' id='email' value={formData.email} onChange={handleChange} required />
            <label htmlFor="message">Informe uma mensagem</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
            <button onClick={handleZap}>Enviar mensagem</button>
          </div>
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