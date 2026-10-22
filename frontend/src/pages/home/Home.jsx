import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import styles from './Home.module.css'
import Button from "../../components/button/Button"

function Home(){
    return(
        <>
        <Header/>
            
        <main className={styles.main}>

            <div className={styles.texto}>
                <p className={styles.destaque}>Atendimento inteligente 24 horas</p>
                <h1>Seu sorriso de volta,<br></br> com agendamento em segundos.</h1>
                <p>Fale com a nossa assistente de inteligência artificial,<br></br>
                tire dúvidas sobre implantes e marque sua avaliação gratuita sem telefonar para ninguém.</p>
                <Button/>
            </div>
             <div className={styles.caixas}>
                
                <div className={styles.caixa}>
                    <h1>Agendamento em 1 minuto</h1>
                    <p>Agendamento online simples e rápido</p>
                </div>
                <div className={styles.caixa}>
                    <h1>Agendamento em 1 minuto</h1>
                    <p>Agendamento online simples e rápido</p>
                </div>
            </div>
             <div className={styles.procedimentos}>
                <div><h1>+12 mil</h1><p>Implantes realizados</p></div>
                <div><h1>4,9/5</h1><p>Avaliação dos pacientes</p></div>
                <div><h1>15 anos</h1><p>De clínica</p></div>
            </div>
            
        </main>
        

        <Footer/>
        </>
    )
}

export default Home