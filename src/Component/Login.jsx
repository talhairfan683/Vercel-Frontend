import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { name: 'English', flag: '🇺🇸' },
    { name: 'German', flag: '🇩🇪' }
  ];

  const handleLogin = () => {
    console.log('Login:', { email, password });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#16131d] to-[#16131d]">
      {/* Navbar */}
      <nav className="bg-[#1e1b2e]/80 backdrop-blur-sm px-5 py-4 flex items-center justify-between border-b border-gray-800/50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <div>
            <h1 className="text-white text-xl font-bold leading-tight">svinpas</h1>
            <p className="text-gray-500 text-xs">success through motivational systems.</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Register Button */}
          <button 
            onClick={() => navigate('/register')}
            className="bg-[#e95260] hover:from-rose-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg font-semibold transition text-sm mt-1.5"
          >
            Register
          </button>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <span className="text-2xl">🇺🇸</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.name}
                    onClick={() => {
                      setSelectedLanguage(lang.name);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-900 hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </div>
                    {selectedLanguage === lang.name && (
                      <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-white text-4xl font-bold mb-3">Get Started!</h2>
            <p className="text-gray-400 text-sm">
              Beat procrastination and achieve your goals with a financial boost!
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-[#1e1b2e]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-2xl">
            {/* Email */}
            <div className="mb-6">
              <label className="text-white text-sm font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-sm"
              />
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-[#e95260] hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3.5 rounded-lg transition text-base mb-4"
            >
              Log In
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
