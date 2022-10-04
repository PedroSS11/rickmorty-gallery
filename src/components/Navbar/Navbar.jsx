// CSS
import styles from './Navbar.module.css'
// ROUTER
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <div className="container d-flex justify-content-between align-items-center">
        <div className={styles.title}>
          <h1>Rick and Morty Gallery</h1>
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