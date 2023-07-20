import styles from './Contact.module.css'
import { Link } from 'react-router-dom'
import gmail from '../../img/gmail.png'
import Linkedln from '../../img/Linkedln.png'
import Github from '../../img/github.png'
import Whatsapp from '../../img/Whatsapp.png'

const Contact= ()=>{
    return(


        <>
            <div className={styles.conteiner}>

                
            <div className={styles.buttonContainer}>

                <Link to='/About'>
                    <button className={styles.button}><span>About me</span></button>
                </Link>
                <Link to="/">
                    <button className={styles.button}> <span>Home</span></button>
                </Link>
                <Link to="/Proyects">
                    <button className={styles.button}> <span>Proyects</span></button>
                </Link>
            </div>

                <div >
                <h1 className={styles.texto}>Contact me by:</h1>
                </div>
            </div>

            <div className={styles.contentIconos}>
            <a href="https://www.linkedin.com/in/santiago-chaves-634a9b259/">
                <img src={Linkedln} alt="linkedin" className={styles.iconos} />
            </a>
            <a href="https://github.com/santichaves">
                <img src={Github} alt="github" className={styles.iconos} />
            </a>
            <a id="emailIcon" href="mailto:santy.chaves2015@gmail.com?subject=Asunto del correo&body=Cuerpo del correo">
                <img src={gmail} alt="mensaje" className={styles.iconos} />
            </a>

            <a href="https://wa.me/543512040610?text=I%20liked%20your%20portfolio">
                <img src={Whatsapp} alt="Whatsapp" className={styles.iconos} />
            </a>

            </div>

        </>
    )
}
export default Contact