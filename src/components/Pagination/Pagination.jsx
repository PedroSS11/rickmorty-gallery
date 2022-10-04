// PAGINATE
import ReactPaginate from "react-paginate"

const Pagination = ({ pageNumber, setPageNumber, info }) => {



    return (
        <ReactPaginate
            className={'pagination gap-2 my-3'}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            pageCount={info?.pages}
            previousLabel={'Anterior'}
            nextLabel={'Próximo'}
            pageClassName={'page-item'}
            previousClassName={'btn btn-outline-primary'}
            nextClassName={'btn btn-outline-primary'}
            pageLinkClassName={'page-link'}
            activeClassName={'active'}
            breakLabel={'...'}
            onPageChange={(data) => { setPageNumber(data.selected + 1) }}

        />

    )
}

export default Pagination