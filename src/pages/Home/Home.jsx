// CSS
import styles from './Home.module.css'
// Route
import { Link } from 'react-router-dom'
// RICK
import Rick from '../../assets/rick.png'
// PORTAL GUN
import PortalGun from '../../assets/portalgun.png'

const Home = () => {



  return (
    <div className={styles.home}>

      <div className={styles.texts}>

        <div>
          <h1>The Rick and Morty API</h1>
          <p>
            API Rick and Morty é uma API REST e GraphQL baseada no programa de televisão Rick and Morty. Neste app você terá acesso a uma galeria com todos os personagens do desenho, nomes, locais de origem, e mais !
          </p>
          <Link to='/gallery' className={styles.link}>Começe a explorar <img src={PortalGun} alt="Portal gun" /></Link>
        </div>

        <div className={styles.rick__image}>
          <img src={Rick} alt="" style={{ maxWidth: "300px" }} />
        </div>
        
      </div>



    </div>
  )
}

export default Home