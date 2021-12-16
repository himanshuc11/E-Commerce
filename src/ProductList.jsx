import Product from "./Product"
import './ProductList.css'
import { v4 as uuidv4 } from 'uuid';

const ProductList = ({products}) => {

    return (
        <div className="product-list">
            {products.map((product) => <Product key={uuidv4()} {...product}></Product>)}
        </div>
    )
}

export default ProductList
