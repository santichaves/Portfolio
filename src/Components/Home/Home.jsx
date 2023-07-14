import Nabvar from '../Nabvar/Nabvar';
import styles from './Home.module.css'
import css from '../../img/css.png'
import html from '../../img/html.png'
import javascript from '../../img/javascript.png'
import node from '../../img/node.png'
import react from '../../img/react.png'
import sequelize from '../../img/sequelize.png'
import git from '../../img/git.png'
import github from '../../img/github.png'
import postgresql from '../../img/postgresql.png'
import Miproyecto from '../../img/Miproyecto.png'



const Home = () =>{
    return(
        <div className={styles.container} >
            
        <div className={styles.home}>
                <div className={styles.card}>
                    <img src={Miproyecto} alt="yo" className={styles.card2} />
                </div>
                <div className={styles.contentText}>
                    <h1 className={styles.texto}>¡BIENVENIDOS!</h1>
                    <h2 className={styles.texto}>Soy Santiago</h2>
                    <h2 className={styles.texto}>Y este es mi portfolio</h2>
                </div>
            </div>

            
            <div className={styles.stack}>
                <h2 className={styles.texto}>Stack tecnológico</h2>
            </div>
           

            <div className={styles.contenedorIcono}>
                <div className={styles.icono}>
                    <img src={html} alt="html" className={styles.icono2} />
                </div>
                <div className={styles.icono}>
                    <img src={css} alt="css" className={styles.icono2} />
                </div>
                <div className={styles.icono}>
                    <img src={javascript} alt="js" className={styles.icono2} />
                </div>
                <div className={styles.icono}>
                    <img src={react} alt="react" className={styles.icono2} />
                </div>
                <div className={styles.icono}>
                    <img src={node} alt="node" className={styles.icono2} />
                </div>
                <div className={styles.icono}>
                    <img src={postgresql} alt="postgres" className={styles.icono2} />
                </div>
                <div className={styles.icono}>
                    <img src={sequelize} alt="sequelize" className={styles.icono2} />
                </div>
                <div className={styles.icono}>
                    <img src={git} alt="git" className={styles.icono2} />
                </div>
                <div className={styles.icono}>
                    <img src={github} alt="github" className={styles.icono2} />
                </div>
            </div>

 

        </div>
    )

}



export default Home;