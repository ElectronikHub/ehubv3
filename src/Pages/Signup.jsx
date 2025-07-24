import { useState } from 'react';
import api from "../Data/axios"; // Axios instance with baseURL = http://localhost:8000/api
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/apiusers", {
        name,
        email,
        password
      });

      alert("Account created successfully!");
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      alert("Failed to create account. Please try again.");
    }
  };

  const handleBackToProducts = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-3 p-2 border rounded"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
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
          Sign Up
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

export default Signup;
