import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        axios.post("http://127.0.0.1:8000/api/register", { name: name, email: email, password: password }).then(res => console.log(res.data))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-5 mx-auto">
                    <div className='bg-light border p-2'>
                        <h2>Sign Up here</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Email address</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-success w-100" id="password" onClick={handleSubmit} placeholder="">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register