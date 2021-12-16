import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'


function detailsJSX(detail) {
    const jsx = (
        <div>
            <img src={detail.image} alt="" width={200} height={200}/>
            <p>{detail.title}</p>
            <p>{detail.description}</p>
        </div>

    )
    return jsx;
}

const Detail = () => {

    const params = useParams()
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + params.id)
            .then(res=>res.json())
            .then(json=>setDetail(json))
    }, [params.id])


    return (
        <div>
            {detail === null ? <p>Data is loading...</p> : detailsJSX(detail)}
        </div>
    )
}

export default Detail
