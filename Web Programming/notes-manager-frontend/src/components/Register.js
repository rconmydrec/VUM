import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { email, password });
      setMessage('Registration successful. Please login.');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      if (err.response && err.response.data) {
        const errorMessage = Array.isArray(err.response.data)
          ? err.response.data.map(e => e.description || e).join('\n')
          : err.response.data.toString();
        setMessage(`Registration failed: ${errorMessage}`);
      } else {
        setMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1 py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow animate__animated animate__fadeIn">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4">
                    <i className="fas fa-user-plus me-3 text-success"></i>
                    Register
                  </h2>
                  
                  {message && (
                    <div className={`alert ${message.includes('successful') ? 'alert-success' : 'alert-danger'}`}>
                      {message}
                    </div>
                  )}

                  <form onSubmit={handleRegister}>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Password</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fas fa-lock"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-success w-100 py-2">
                      Register <i className="ms-2 fas fa-user-check"></i>
                    </button>
                  </form>

                  <div className="text-center mt-4">
                    <p className="text-muted">
                      Already have an account?{' '}
                      <a href="/login" className="text-decoration-none">
                        Login here
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;