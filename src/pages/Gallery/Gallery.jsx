// REACT
import { useState } from "react"
// HOOKS
import useFetch from "../../hooks/useFetch"
// COMPONENTS
import Card from "../../components/Card/Card"
import Pagination from "../../components/Pagination/Pagination"
import Search from "../../components/Search/Search"
// PAGES
import EmptySearch from "../EmptySearch/EmptySearch"

const Gallery = () => {

  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')
  

  const initialURL = `https://rickandmortyapi.com/api/character`

  const {results: characters, info} = useFetch(`${initialURL}/?page=${pageNumber}&name=${search}`)

  window.scrollTo(0,0)



  return (
    <div className="container my-5">
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
      {characters === undefined ? <EmptySearch /> : <Card characters={characters}/>}
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info}/>
    </div>
  )
}

export default Gallery