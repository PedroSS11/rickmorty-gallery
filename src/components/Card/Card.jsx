// ROUTER
import { Link } from "react-router-dom"
// CSS
import styles from './Card.module.css'

const Card = ({ characters }) => {



    return (

        <div className='row'>
            {characters && characters.map((item) => (
                <div key={item.id} className='col mb-4' >
                    <div className={`${styles.custom__card} card `} style={{ minWidth: "200px" }}>
                        <img src={item.image} alt={item.name} />
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <hr />
                            <p>Gênero: {item.gender}</p>
                            <p>Status: {item.status}</p>
                            <Link to={`/carddetails/${item.id}`} className={styles.card__config}>Mais...</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    )
}

export default Card