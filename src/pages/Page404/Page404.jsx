import { Link } from "react-router-dom"
// CSS
import styles from './Page404.module.css'
const Page404 = () => {
  return (
    <div className={styles.page}>
      <h1>Página não encontrada !</h1>
      <Link to='/'>Voltar para o início</Link>

    </div>

  )
}

export default Page404