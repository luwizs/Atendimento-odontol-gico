import styles from './Header.module.css'
import { Link } from "react-router-dom"
import Button from "../../components/button/Button"

function Header(){
    return(
        <header className={styles.header}>
            <div>
                <Link to="/" className={styles.link}><h1 className={styles.logo}>Logo</h1></Link>
            </div>
            <nav className={styles.menu}>
                <Link className={styles.link}><p>Início</p></Link>
                <Link className={styles.link}><p>Sobre nós</p></Link>
                <Link className={styles.link}><p>Serviços</p></Link>

            </nav>
            <div className={styles.acoes}>
                <Link to="../pages/login/Login" className={styles.link}>
                    <a className={styles.login}>Login</a>
                </Link>
                <Button/>           
            </div>
            
           
            
           
        </header>
    );
}

export default Header