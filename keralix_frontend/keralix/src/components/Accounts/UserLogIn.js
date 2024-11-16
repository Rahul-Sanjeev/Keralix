import React, { useState } from 'react';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Input change handler with validation for email or mobile number
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);

        // Email and mobile number patterns
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobilePattern = /^\d{10}$/;

        // Set error if input is invalid
        if (emailPattern.test(value) || mobilePattern.test(value)) {
            setError('');
        } else {
            setError('Enter a valid email or 10-digit mobile number.');
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h2>

                <form>
                    {!isLogin && (
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" className="form-control" placeholder="Your name" required />
                        </div>
                    )}

                    <div className="mb-3">
                        <label htmlFor="emailOrMobile" className="form-label">Email or Mobile</label>
                        <input
                            type="text"
                            id="emailOrMobile"
                            className="form-control"
                            placeholder="Email or Mobile"
                            value={input}
                            onChange={handleInputChange}
                            required
                        />
                        {error && <small className="text-danger">{error}</small>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-control"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary w-100 mt-3">{isLogin ? 'Login' : 'Register'}</button>
                </form>

                <p className="text-center mt-3 d-flex gap-3 align-middle justify-center">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        type="button"
                        className="btn btn-link p-0"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? ' Register here' : ' Login here'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AuthForm;
