// CSS
import styles from './Search.module.css'

const Search = ({ setSearch, setPageNumber }) => {
    
    const handleButton = (e) => {
        e.preventDefault()
    } 
    
    
    return (

        <form className={`${styles.search} d-flex justify-content-center p-5`}>
            <input type="text"
                onChange={(e) => {
                    setPageNumber(1)
                    setSearch(e.target.value)
                }}
                placeholder="Buscar nomes"
            />
            <button className='btn' onClick={handleButton}>Buscar</button>
        </form>
    )
}

export default Search