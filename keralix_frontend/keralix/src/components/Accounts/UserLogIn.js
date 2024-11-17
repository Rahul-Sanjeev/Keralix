import React, { useState } from 'react'
import "../../styles/UserLogin.css"

function UserLogIn() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    }) 

    const { email, password } = formData 

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
        console.log(formData)
    }

    const handleSubmit = (e) => { e.preventDefault() }



    return (
        <>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="login-title">Log In</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Log In
                    </button>
                    <p className="login-footer">
                        Don't have an account? <a href="/register">Register here</a>
                    </p>
                </form>
            </div>
        </>
    )
}

export default UserLogIn