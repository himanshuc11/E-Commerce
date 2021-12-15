import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

    const [form, setForm] = useState({email: "", password: ""})

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((user) => console.log(user))
        .catch(err => console.log(err))
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" class="form-control" value={form.email} name="email" placeholder="Email" onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" class="form-control" value={form.password} id="password" name="password" placeholder="Password" onChange={handleChange}/>
            </div>
  
            <button type="submit" class="btn btn-default" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default SignUp
