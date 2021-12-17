import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import ProductList from "./ProductList"

const CategoryList = () => {

    const params = useParams()
    
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/category/${params.categoryName}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))

    }, [params.categoryName])

    return (
        <ProductList products={products}></ProductList>
    )
}

export default CategoryList
