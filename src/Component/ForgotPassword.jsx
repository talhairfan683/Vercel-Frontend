import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { name: 'English', flag: '🇺🇸' },
    { name: 'German', flag: '🇩🇪' }
  ];

  const handleContinue = () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    console.log('Password reset email sent to:', email);
    // You can show success message or navigate
    alert('Reset instructions sent to your email!');
  };

  return (
    <div className="min-h-screen bg-[#16131d] flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#1f1b29] px-6 py-4 flex items-center justify-between border-b border-gray-800/50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-11 h-11 rounded-full" />
          <div>
            <h1 className="text-white text-xl font-bold leading-tight">svinpas</h1>
            <p className="text-gray-500 text-xs">success through motivational systems.</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Login Button */}
          <button 
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition text-sm"
          >
            Login
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
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-white text-3xl font-bold mb-3">Forgot your password?</h2>
            <p className="text-gray-400 text-sm">
              We will send reset instructions to your registered email address.
            </p>
          </div>

          {/* Card */}
          <div className="bg-[#1f1b29] rounded-2xl p-8 border border-gray-800/50">
            {/* Email Input */}
            <div className="mb-6">
              <label className="text-white text-sm font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-sm"
              />
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3.5 rounded-lg transition"
            >
              Continue
            </button>
          </div>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <button 
              onClick={() => navigate('/login')}
              className="text-gray-400 hover:text-white text-sm transition"
            >
              ← Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}