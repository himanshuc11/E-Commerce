import app from './firebase'
import SignUp from "./SignUp"

import SignIn from './SignIn'
import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'

const App = () => {

    const [user, setUser] = useState(null)

    return (
            <Routes>
                <Route path="/login" element={<SignIn setUser={setUser}></SignIn>}></Route>
                <Route path="/register" element={<SignUp></SignUp>}></Route>
            </Routes>
    )
}

export default App
