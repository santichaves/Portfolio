import styles from './Nabvar.module.css'
import { Link } from 'react-router-dom';

const Nabvar = () =>{


    return(

        <div className={styles.container}>
                <Link to='/About'>
                <button className={styles.button}> 
                <span>About me</span></button>
                </Link>
        
                <Link to="/Contact">
                <button className={styles.button}> <span>Contact</span></button>
                </Link>
            
                <Link to="/Proyects">
                <button className={styles.button}> <span>Proyects</span></button>
                </Link>
            
        </div>
    )
}

export default Nabvar;