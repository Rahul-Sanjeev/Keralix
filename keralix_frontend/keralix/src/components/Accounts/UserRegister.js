import React, { useState, useEffect } from "react";
import "../../styles/UserRegister.css"

const UserRegister = () => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    })

    const { first_name, last_name, email, mobile, password, confirmPassword } = formData

    // Handle input changes
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple form validation
        if (!first_name || !last_name || !email || !mobile || !password || !confirmPassword) {
            alert("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Submit the form data
        console.log("Form Submitted: ", formData);
        // You can replace the console.log with a call to an API or further processing
    }

    return (
        <>
            <div className="register-container">
                <div className="register-form">
                    <h2 className="register-title">Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                value={first_name}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={last_name}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={mobile}
                                onChange={handleChange}
                                placeholder="Enter your mobile number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                            />
                        </div>

                        <button type="submit" className="register-btn">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UserRegister;
