import { useState, useEffect } from "react";

const useFecthDetails = (url) => {

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDetails(data))
            .catch((err) => console.log(err))

    }, [url])

    return {details}
}


export default useFecthDetails;