import "./Product.css"
import { Link } from "react-router-dom"

const Product = (props) => {
    return (
        <div className="product" style={{width: "400px", height: "400px"}}>
            <Link to={`product/${props.id}`}>
                <img src={props.image} alt="" width="200px" height="200px"/>
                <h3>{props.title}</h3>
            </Link>
            <p>Rs: {props.price}</p>
            <p>Category: {props.category}</p>
        </div>
    )
}

export default Product
