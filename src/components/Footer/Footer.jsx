import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <h4>Rick and Morty Gallery</h4>
        <span>&copy; Pedro Henrique - 2022</span>
      </div>
    </footer>
  )
}

export default Footer