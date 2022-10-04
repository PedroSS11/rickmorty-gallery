// REACT
import { useState } from "react"
// HOOKS
import useFetch from "../../hooks/useFetch"
// COMPONENTS
import Card from "../../components/Card/Card"
import Pagination from "../../components/Pagination/Pagination"

const Gallery = () => {

  const [pageNumber, setPageNumber] = useState(1)

  const initialURL = `https://rickandmortyapi.com/api/character`

  const {results: characters, info} = useFetch(`${initialURL}/?page=${pageNumber}`)


  return (
    <div className="container my-5">
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
      <Card characters={characters}/>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
    </div>
  )
}

export default Gallery