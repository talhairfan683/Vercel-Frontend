import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Settings() {
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Full Name',
    email: 'Email@example.com',
    password: '************'
  });

  const [cardNumber] = useState('**** **** **** *** 234');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditCard = () => {
    console.log('Edit card clicked');
  };

  const handleDeleteCard = () => {
    console.log('Delete card clicked');
  };

  const handleConfigure = () => {
    console.log('Configure preferences clicked');
  };

  return (
    <div className="flex min-h-screen bg-[#1a1625]">
      {/* Sidebar - Desktop Only */}
      <aside className="hidden lg:flex w-32 bg-[#16131d] border-r border-gray-800/50 flex-col items-center py-6 gap-8">
        {/* Logo */}
        <div className="mb-4">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        {/* My Goals */}
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <span className="text-xs font-medium">My Goals</span>
        </button>

        {/* Notifications */}
        <button onClick={() => navigate('/notifications')} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <span className="text-xs font-medium">Notifications</span>
        </button>

        {/* Settings - Active */}
        <button className="flex flex-col items-center gap-2 text-white">
          <div className="w-10 h-10 bg-[#e95260] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-xs font-medium">Settings</span>
        </button>

        {/* Logout */}
        <button 
          onClick={() => navigate('/login')}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
          <span className="text-xs font-medium">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Account Settings</h1>
            <p className="text-gray-400 text-sm">Get your reminders & stay updated.</p>
          </div>

          {/* Personal Info Section */}
          <div className="bg-[#252031] rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-800/50">
            <h2 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Personal Info</h2>
            
            <div className="space-y-4 sm:space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder='Name'
                  value={personalInfo.name}
                  onChange={handleInputChange}
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-white-500 focus:ring-1 focus:ring-white-500 transition text-sm sm:text-base"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  value={personalInfo.email}
                  onChange={handleInputChange}
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-white-500 focus:ring-1 focus:ring-white-500 transition text-sm sm:text-base"
                />
              </div>

              {/* Password Field */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                  <label className="block text-gray-300 text-sm">Password</label>
                  <button className="text-[#e95260] text-sm hover:text-white transition font-medium text-left sm:text-right">
                    Forgot Password?
                  </button>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder='Password'
                  value={personalInfo.password}
                  onChange={handleInputChange}
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-white-500 focus:ring-1 focus:ring-white-500 transition text-sm sm:text-base"
                />
              </div>
            </div>
          </div>

          {/* Payment Info Section */}
          <div className="bg-[#252031] rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-800/50">
            <h2 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Payment Info</h2>
            
            <div>
              <h3 className="text-white text-sm sm:text-base font-medium mb-4">Card Details</h3>
              
              {/* Card Number Display */}
              <div className="bg-white border border-gray-300 rounded-lg px-4 py-3 mb-4">
                <p className="text-gray-900 text-sm sm:text-base">{cardNumber}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleEditCard}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border border-gray-600 rounded-lg text-white hover:bg-[#e95260] transition font-medium text-sm sm:text-base"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit
                </button>
                <button
                  onClick={handleDeleteCard}
                  className="px-5 py-2.5 bg-[#e95260] rounded-lg text-white transition font-medium text-sm sm:text-base"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Configure Preferences Section */}
          <div className="bg-[#252031] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-gray-800/50">
            <h2 className="text-white text-lg sm:text-xl font-semibold">Configure Your Account Preferences</h2>
            <button
              onClick={() => navigate('/Account')}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#e95260] rounded-lg text-white transition font-medium whitespace-nowrap text-sm sm:text-base"
            >
              Configure
            </button>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#16131d] border-t border-gray-800/50 flex items-center justify-around py-3 z-50">
        {/* My Goals */}
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-1 text-gray-400">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <span className="text-xs font-medium">My Goals</span>
        </button>

        {/* Notifications */}
        <button onClick={() => navigate('/notifications')} className="flex flex-col items-center gap-1 text-gray-400">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <span className="text-xs font-medium">Notifications</span>
        </button>

        {/* Settings - Active */}
        <button className="flex flex-col items-center gap-1 text-white">
          <div className="w-10 h-10 bg-[#e95260] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-xs font-medium">Settings</span>
        </button>

        {/* Logout */}
        <button onClick={() => navigate('/login')} className="flex flex-col items-center gap-1 text-gray-400">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
          <span className="text-xs font-medium">Logout</span>
        </button>
      </nav>
    </div>
  );
}