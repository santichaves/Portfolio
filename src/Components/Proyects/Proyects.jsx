import MuscleLAb from '../../img/MuscleLAb.png'
import Food from '../../img/Food.png'
import styles from './Proyects.module.css'
import { Link } from 'react-router-dom'




const Proyects= () =>{



    return(

        <div>
            <div className={styles.flecha}>
                <Link to=
                    "/">
                    <button className={styles.button}>
                        <span>Home</span>
                    </button>
                </Link>
            <div className={styles.proyectos}>
                <h1 className={styles.texto}>Projects:</h1>
            </div>
            </div>

                <div className={styles.conteiner}>
                <div className={styles.card}>
                    <a href="https://pi-food-ten-xi.vercel.app/">
                        <h2 className={styles.texto}>Food App</h2>
                    </a>
                        <p className={styles.parrafo}>This project was made with Javascript, React.js, Redux, Node.js, Express and Sequelize.
                             Search by entire recipe name or a word match. Filter by type of diet,
                             and by origin, if it is from the api or from the database, since it allows you to create recipes and save them.
                             Sort by heslthScore, and alphabetically.
                        </p>
                    <img src={Food} alt="food" className={styles.img} />
                </div>
                <div className={styles.card}>
                    <a href="https://muscle-lab-six.vercel.app/">
                        <h2 className={styles.texto}>MuscleLab</h2>
                    </a>
                        <p className={styles.parrafo}>
                            MuscleLab was created with the intention of being able to manage a gym page.
                            By the administrator you can create, edit and delete classes, users and locations.
                            The client can create a user, or access with Google. Buy a membership
                            which allows a certain number of classes, which are selected and saved in the profile.They can also
                            make comments on the classes taken.
                        </p>
                    <img src={MuscleLAb} alt="muscleLab" className={styles.img} />
                </div>
            </div>

        </div>
    )
}


export default Proyects