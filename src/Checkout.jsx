import ProductList from './ProductList'
import { v4 as uuidv4 } from 'uuid';
import "./Checkout.css"

const Checkout = ({cart}) => {

    let totalPrice = 0
    for(let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].qty * cart[i].price
    }

    // let totalPrice = cart.reduce((acc, item) => {
    //     return acc + item.qty * item.price
    // }, 0)

    return (
        <div>
           {cart.map((item) => <div className="cart-item" key={uuidv4()}>
               <img src={item.image} alt="" width="200px" height="200px"/>
               <p>Item: {item.description}</p>
            <p>Qty: {item.qty}</p>
            <p>Price: {item.price}</p>
           </div>)}
           <h1>The total Price is {totalPrice}</h1>
        </div>
    )
}

export default Checkout
