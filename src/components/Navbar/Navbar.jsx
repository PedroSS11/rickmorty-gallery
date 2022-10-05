// CSS
import styles from './Navbar.module.css'
// ROUTER
import { Link } from 'react-router-dom';
// LOGO
import Logo from '../../assets/logo.png'
import LogoGallery from '../../assets/logo2.png'

const Navbar = () => {
  return (
    <nav>
      <div className="container d-flex justify-content-between align-items-center">
        <div className={styles.title}>
          <Link to='/'><img src={Logo} alt="Logo" style={{maxWidth:"200px"}}/> <img src={LogoGallery} alt="Gallery" style={{maxWidth:"100px"}}/> </Link>
        </div>
        <ul className='d-flex'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/gallery'><li>Personagens</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar