import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../Data/axios"; // Make sure path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.post('/apiusers/login', {
        email,
        password
      });

      if (response.status === 200) {
        alert("Logged in successfully!");
        // Optionally: save user info or token in localStorage
        // localStorage.setItem("user", JSON.stringify(response.data));
        navigate('/');
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleBackToProducts = () => {
    navigate('/Products');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-primary text-white p-2 rounded hover:bg-primary-dark">
          Log In
        </button>
      </form>

      <button
        onClick={handleBackToProducts}
        className="mt-4 text-sm text-blue-600 hover:underline"
      >
        ← Return to Products
      </button>
    </div>
  );
};

export default Login;