import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignIn = ({setUser}) => {

    const [form, setForm] = useState({email: "", password: ""})

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, form.email, form.password)
        .then((user) => setUser(user))
        .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
        })
    }

    return (
        <form>
            This is Sign In page
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" value={form.email} name="email" placeholder="Email" onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" value={form.password} id="password" name="password" placeholder="Password" onChange={handleChange}/>
            </div>
  
            <button type="submit" className="btn btn-default" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default SignIn
