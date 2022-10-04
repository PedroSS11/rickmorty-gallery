// PAGINATE
import ReactPaginate from "react-paginate"
// CSS
import './Pagination.css'

const Pagination = ({ pageNumber, setPageNumber, info }) => {



    return (
        <ReactPaginate
            className={'pagination gap-2 my-3'}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            pageCount={info?.pages}
            previousLabel={'Anterior'}
            nextLabel={'Próximo'}
            pageClassName={'page-item'}
            previousClassName={'btn btn-outline-success'}
            nextClassName={'btn btn-outline-success'}
            pageLinkClassName={'page-link'}
            activeClassName={'active'}
            breakLabel={'...'}
            onPageChange={(data) => { setPageNumber(data.selected + 1) }}

        />

    )
}

export default Pagination