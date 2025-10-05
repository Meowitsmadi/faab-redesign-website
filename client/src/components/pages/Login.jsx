import { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/auth/admin-login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.detail || 'Login failed');
        setLoading(false);
        return;
      }

      const data = await res.json();

      // Store tokens in localStorage
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);

      setLoading(false);
      alert('Login successful! Welcome admin.');
      // Optionally redirect or update app state here
    } catch (err) {
      setError('Network error, please try again.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Login</h2>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" disabled={loading} style={{ marginTop: 15 }}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
