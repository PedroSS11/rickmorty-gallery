// ROUTER
import { Link, useParams } from "react-router-dom"
// HOOKS
import useFecthDetails from "../../hooks/useFetchDetails"
// CSS
import styles from './CardDetails.module.css'

const CardDetails = () => {


  const { id } = useParams()
  const url = 'https://rickandmortyapi.com/api/character/' + id

  const { details: character } = useFecthDetails(url)

  return (
    <div className={`${styles.div__card} container-fluid  d-flex justify-content-center align-items-center ` } >
      <div className="row ">
        <div className="col-12">
          <div className={` ${styles.custom__card} card text-center`} style={{maxWidth:"100%"}}>
            <img className="img-fluid" src={character.image} alt={character.name} />
            <div className="card-body">
              <h4 className="card-title">{character.name}</h4>
              <hr />
              <p>Origem: {character?.origin?.name}</p>
              <p>Status: {character.status}</p>
              <p>Espécie: {character.species}</p>
              <p>Gênero: {character.gender}</p>
              <p>Localização: {character.location?.name}</p>
            </div>
            <Link to={`/gallery`} className={styles.link}>Voltar</Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CardDetails