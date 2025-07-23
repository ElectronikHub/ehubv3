import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    alert("Logged in!");
    navigate('/');
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

      {/* Return to Products Button */}
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
