import styles from './Button.module.css'
import { Link } from "react-router-dom"


function Button(){
    return(
        <Link to="/agendamento"><button className={styles.button}>Agendar consulta</button></Link>
    )
}

export default Button