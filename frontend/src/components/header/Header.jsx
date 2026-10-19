import styles from './Header.module.css'
import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <h1 className={styles.logo}><Link to="/">Logo</Link></h1>
            
           
        </header>
    );
}

export default Header