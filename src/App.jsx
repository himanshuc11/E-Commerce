import app from './firebase'
import SignUp from "./SignUp"

import SignIn from './SignIn'
import { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Detail from './Detail'

import { Route, Routes } from 'react-router-dom'
import ProductList from './ProductList'

const App = () => {

    const [user, setUser] = useState(null)
    const [products, setProducts] = useState([])

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
                    <Route path="/" element={<ProductList products={products}></ProductList>}></Route>
                    <Route path="/login" element={<SignIn setUser={setUser}></SignIn>}></Route>
                    <Route path="/register" element={<SignUp></SignUp>}></Route>
                    <Route path="/product/:id" element={<Detail></Detail>}></Route>
                </Routes>
            </>
    )
}

export default App
