import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import styles from './Home.module.css'

function Home(){
    return(
        <>
        <Header/>
        <main>
            <div className={styles.texto}>
                <p className={styles.destaque}>Atendimento inteligente 24 horas</p>
                <h1>Seu sorriso de volta,<br></br> com agendamento em segundos.</h1>
                <p>Fale com a nossa assistente de inteligência artificial,<br></br>
                tire dúvidas sobre implantes e marque sua avaliação gratuita sem telefonar para ninguém.</p>
                <button className={styles.button}>Agendar consulta</button>
            </div>
             <div className={styles.procedimentos}>
                <div><h1>+12 mil</h1><p>implantes realizados</p></div>
                <div><h1>+12 mil</h1><p>implantes realizados</p></div>
                <div><h1>+12 mil</h1><p>implantes realizados</p></div>
            </div>
            <div>
                <div></div>
            </div>
        </main>
        

        <Footer/>
        </>
    )
}

export default Home