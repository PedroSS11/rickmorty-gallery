// CSS
import styles from './EmptySearch.module.css'
// MORTY IMAGE
import Morty from '../../assets/morty.png'

const EmptySearch = () => {
  return (
    <div className={`${styles.message} text-center p-5`}>
        <h2>Não foi encontrado um persongem com este nome!</h2>
        <img src={Morty} alt="Morty" />
    </div>
  )
}

export default EmptySearch