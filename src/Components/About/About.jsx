import styles from './About.module.css'
import CV from '../../Pdf/CV.pdf'

const About = () =>{


    return(

        <div className={styles.container}>

            <div className={styles.texto}>

            <h1>Hello  </h1>
            <h2>I'm Santiago</h2>
            <h3>Im a Full-Stack developer</h3>
            <h3>I am a very kind person and very passionate about the things I do, I really like to investigate and learn about all kinds of things. <a href={CV} download="Cv Santiago.pdf"> CV</a></h3>
                   
            </div>

        </div>


    )
}

export default About;