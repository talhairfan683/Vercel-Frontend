import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Account() {
  const navigate = useNavigate();
  
  // State for form fields
  const [language, setLanguage] = useState('English');
  const [reminderInterval, setReminderInterval] = useState('Daily');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showReminderDropdown, setShowReminderDropdown] = useState(false);
  
  // State for checkboxes
  const [deadlineReminders, setDeadlineReminders] = useState(true);
  const [statusUpdates, setStatusUpdates] = useState(false);
  const [achievementCelebrations, setAchievementCelebrations] = useState(false);
  
  // State for payment info
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const languages = ['English', 'Urdu', 'Spanish', 'French', 'German'];
  const reminderIntervals = ['Daily', 'Weekly'];

  const handleUpdate = () => {
    console.log('Update clicked');
    console.log({
      language,
      reminderInterval,
      deadlineReminders,
      statusUpdates,
      achievementCelebrations,
      cardholderName,
      cardNumber,
      expiryDate,
      cvv
    });
    // Yahan aap API call kar sakte hain
  };

  const handleVerifyPayment = () => {
    console.log('Verify Payment clicked');
    console.log({
      cardholderName,
      cardNumber,
      expiryDate,
      cvv
    });
    // Yahan aap payment verification API call kar sakte hain
  };

  const handleGoogleCalendar = () => {
    console.log('Google Calendar sync clicked');
    // Google Calendar integration logic
  };

  const handleOutlookSync = () => {
    console.log('Outlook sync clicked');
    // Outlook integration logic
  };

  return (
    <div className="flex min-h-screen bg-[#1a1625]">
      {/* Sidebar */}
      <aside className="w-32 bg-[#16131d] border-r border-gray-800/50 flex flex-col items-center py-6 gap-8">
        <div className="mb-4">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        <button onClick={() => navigate('/')} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <span className="text-xs font-medium">My Goals</span>
        </button>

        <button onClick={() => navigate('/notifications')} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <span className="text-xs font-medium">Notifications</span>
        </button>

        <button onClick={() => navigate('/settings')} className="flex flex-col items-center gap-2 text-white">
          <div className="w-10 h-10 bg-[#e95260] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-xs font-medium">Settings</span>
        </button>

        <button onClick={() => navigate('/login')} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
          <span className="text-xs font-medium">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-6 py-8">
          {/* Back Button and Logo */}
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => navigate('/settings')}
              className="w-12 h-12 bg-[#e95260] rounded-full flex items-center justify-center transition"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Main Card */}
          <div className="bg-[#252031] rounded-2xl p-6 border border-gray-800/50">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-white text-2xl font-bold mb-1">Configure Your Account Preferences</h1>
                <p className="text-gray-400 text-sm">Set your preferences to enhance your experience.</p>
              </div>
              <button
                onClick={handleUpdate}
                className="px-6 py-2 bg-[#e95260] rounded-lg text-white font-medium transition"
              >
                Update
              </button>
            </div>

            <div className="h-px bg-gradient-to-r from-[#e95260] to-pink-500 mb-6"></div>

            {/* Select Your Language */}
            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">Select Your Language</h3>
              <p className="text-gray-400 text-sm mb-3">Choose your preferred language for app navigation.</p>
              
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-white transition"
                >
                  <span>{language}</span>
                  <svg className={`w-5 h-5 text-white-500 transition-transform ${showLanguageDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showLanguageDropdown && (
                  <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-300 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setShowLanguageDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-100 transition"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Reminder Intervals */}
            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">Reminder Intervals</h3>
              <p className="text-gray-400 text-sm mb-3">Adjust how often and what type of notifications you receive</p>
              
              <div className="relative mb-4">
                <button
                  onClick={() => setShowReminderDropdown(!showReminderDropdown)}
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-white-500 transition"
                >
                  <span>{reminderInterval}</span>
                  <svg className={`w-5 h-5 text-white-500 transition-transform ${showReminderDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showReminderDropdown && (
                  <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-300 overflow-hidden">
                    {reminderIntervals.map((interval) => (
                      <button
                        key={interval}
                        onClick={() => {
                          setReminderInterval(interval);
                          setShowReminderDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-100 transition"
                      >
                        {interval}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={deadlineReminders}
                    onChange={(e) => setDeadlineReminders(e.target.checked)}
                    className="w-5 h-5 text-white-500 bg-transparent border-2 border-gray-400 rounded focus:ring-white focus:ring-2 cursor-pointer"
                  />
                  <span className="text-white text-sm">Deadline Reminders</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={statusUpdates}
                    onChange={(e) => setStatusUpdates(e.target.checked)}
                    className="w-5 h-5 text-pink-500 bg-transparent border-2 border-gray-400 rounded focus:ring-white focus:ring-2 cursor-pointer"
                  />
                  <span className="text-white text-sm">Status Updates</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={achievementCelebrations}
                    onChange={(e) => setAchievementCelebrations(e.target.checked)}
                    className="w-5 h-5 text-pink-500 bg-transparent border-2 border-gray-400 rounded focus:ring-white focus:ring-2 cursor-pointer"
                  />
                  <span className="text-white text-sm">Achievement Celebrations</span>
                </label>
              </div>
            </div>

            {/* Add Payment Information */}
            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-2">Add Payment Information</h3>
              <p className="text-gray-400 text-sm mb-4">Securely store your payment method for goal fees.</p>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Savannah Nguyen"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-white transition"
                />

                <input
                  type="text"
                  placeholder="4359"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-white transition"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="5/27/15"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-white transition"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-white transition"
                  />
                </div>

                <button
                  onClick={handleVerifyPayment}
                  className="w-full bg-[#e95260] text-white rounded-lg px-4 py-3 font-medium transition"
                >
                  Verify Payment Information
                </button>
              </div>
            </div>

            {/* Sync with Personal Calendar */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">Sync with Personal Calendar</h3>
              <p className="text-gray-400 text-sm mb-4">Authorize the app to access your calendar for deadline reminders</p>

              <div className="flex gap-3">
                <button
                  onClick={handleGoogleCalendar}
                  className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 rounded-lg border border-gray-300 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-900 font-medium text-sm">Google Calendar</span>
                </button>

                <button
                  onClick={handleOutlookSync}
                  className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 rounded-lg border border-gray-300 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#0078D4" d="M23 5v14a1 1 0 0 1-1 1H12.5v-5h2.8l.4-3h-3.2V9.5c0-.8.2-1.3 1.3-1.3H16V5.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V12H6.7v3h2.8v5H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1z"/>
                  </svg>
                  <span className="text-gray-900 font-medium text-sm">Sync with Outlook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}