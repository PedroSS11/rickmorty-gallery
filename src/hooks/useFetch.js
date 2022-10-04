import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [info, setInfo] = useState(null)
    const [results, setResults] = useState(null)
    const [error, setError] = useState('')


    useEffect(() => {

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setInfo(data.info)
                setResults(data.results)
                
            })
            .catch((err) => {
                setError(err)
                console.log(err)
            })

    }, [url])

    return { data, info, results, error }

}


export default useFetch;
