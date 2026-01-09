import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = () => {
    console.log('Register:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#16131d] to-[#16131d]">
      {/* Navbar */}
      <nav className="bg-[#1e1b2e]/80 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-b border-gray-800/50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <div>
            <h1 className="text-white text-xl font-bold leading-tight">svinpas</h1>
            <p className="text-gray-500 text-xs">success through motivational systems.</p>
          </div>
        </div>

        {/* Log In Button */}
        <button 
          onClick={() => navigate('/login')}
          className="bg-[#e95260] text-white px-6 py-2 rounded-lg font-semibold transition text-sm"
        >
          Log In
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-white text-4xl font-bold mb-3">Welcome Back!</h2>
            <p className="text-gray-400 text-sm">
              Track your goals and stay motivated.
            </p>
          </div>

          {/* Register Card */}
          <div className="bg-[#1e1b2e]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-2xl">
            {/* Name */}
            <div className="mb-5">
              <label className="text-white text-sm font-medium mb-2 block">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-sm"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="text-white text-sm font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email@example.com"
                className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-sm"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="text-white text-sm font-medium mb-2 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-sm"
              />
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleRegister}
              className="w-full bg-[#e95260] text-white font-semibold py-3.5 rounded-lg transition text-base mb-4"
            >
              Sign In
            </button>

            {/* Forgot Password */}
            <div className="text-center">
              <button 
                onClick={() => navigate('/forgot-password')}
                className="text-purple-400 hover:text-purple-300 text-sm transition underline"
              >
                Forgot password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}