import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function calculateRender(categories) {
    return (
        <ul>
            {categories.map((category) => {
                return <li><Link to={"/categories/" + category}>{category}</Link></li>
            })}
        </ul>
    )
}

const Category = () => {

    const [categories, setCategories] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
    }, [])

    return (
        <div>
            {categories === null ? <p>Data is loading</p> : calculateRender(categories)}
        </div>
    )
}

export default Category
