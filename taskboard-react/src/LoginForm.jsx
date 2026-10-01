import { useState } from 'react';
import { api } from './api';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        try {
            const result = await api('/login', {
                method: 'POST',
                body: {
                    email,
                    password
                }
            });

            localStorage.setItem('token', result.token);

            onLogin();
        } catch {
            setError('Invalid email or password');
        };
         {
            setError('Invalid email or password');
        }
    }

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>
            </form>

            {error && <p>{error}</p>}
        </div>
    );
}

export default LoginForm;