import app from './firebase'
import SignUp from "./SignUp"

import SignIn from './SignIn'
import { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Detail from './Detail'

import { Route, Routes } from 'react-router-dom'
import ProductList from './ProductList'

import Category from './Category'
import CategoryList from './CategoryList'

import Checkout from './Checkout'

const App = () => {

    const [user, setUser] = useState(null)
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
            .catch(err => alert(err))
    }, [])

    return (
            <>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<ProductList setCart={setCart} user={user} products={products}></ProductList>}></Route>
                    <Route path="/login" element={<SignIn setUser={setUser}></SignIn>}></Route>
                    <Route path="/register" element={<SignUp></SignUp>}></Route>
                    <Route path="/product/:id" element={<Detail></Detail>}></Route>
                    <Route path="/categories" element={<Category></Category>}></Route>
                    <Route path="/categories/:categoryName" element={<CategoryList user={user} setCart={setCart}></CategoryList>}></Route>
                    <Route path="/checkout" element={<Checkout cart={cart}></Checkout>}></Route>
                </Routes>
            </>
    )
}

export default App
