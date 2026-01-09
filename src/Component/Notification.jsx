import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Notification() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'rejected',
      title: 'Goal Rejected',
      description: 'Goal details',
      time: '1 hour left',
      timeColor: 'text-[#e95260]'
    },
    {
      id: 2,
      type: 'review',
      title: 'Goal in Review',
      description: 'Goal details',
      time: '1 hour ago',
      timeColor: 'text-gray-400'
    },
    {
      id: 3,
      type: 'approved',
      title: 'Goal Approved',
      description: 'Congrats! Your goal "Complete Tax Return" was successfully completed and verified.',
      time: '2 days ago',
      timeColor: 'text-gray-400'
    }
  ]);

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all notifications?')) {
      setNotifications([]);
    }
  };

  const handleViewComment = (id) => {
    console.log('View comment for notification:', id);
    // Navigate to rejection modal or details page
  };

  const handleViewDetails = (id) => {
    console.log('View details for notification:', id);
    navigate('/goal-detail/' + id);
  };

  return (
    <div className="flex min-h-screen bg-[#1a1625] overflow-hidden">
      {/* Sidebar - Desktop Only */}
      <aside className="hidden lg:flex w-32 bg-[#16131d] border-r border-gray-800/50 flex-col items-center py-6 gap-8">
        {/* Logo */}
        <div className="mb-4">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        {/* My Goals */}
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition">
          <div className="w-10 h-10 bg-[#ffffff29] rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <span className="text-xs font-medium">My Goals</span>
        </button>

        {/* Notifications */}
        <button className="flex flex-col items-center gap-2 text-white">
          <div className="w-10 h-10 bg-[#e95260] rounded-2xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <span className="text-xs font-medium">Notifications</span>
        </button>

        {/* Settings */}
        <button onClick={() => navigate('/Setting')} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition">
          <div className="w-10 h-10 flex items-center justify-center">
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Notifications</h1>
              <p className="text-gray-400 text-sm">Get your reminders & stay updated.</p>
            </div>
            <button 
              onClick={handleClearAll}
              className="text-gray-400 hover:text-white text-sm font-medium transition text-left sm:text-right"
            >
              Clear All Notifications
            </button>
          </div>

          {/* Notifications List */}
          {notifications.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <p className="text-gray-500 text-base">No notifications yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className="bg-[#1e1b2e] rounded-2xl p-4 sm:p-6 border border-gray-800/50 hover:border-gray-700/50 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{notification.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{notification.description}</p>
                      <p className={`text-sm font-medium ${notification.timeColor}`}>
                        {notification.time}
                      </p>
                    </div>
                    
                    <div className="w-full sm:w-auto sm:ml-4">
                      {notification.type === 'rejected' && (
                        <button 
                          onClick={() => handleViewComment(notification.id)}
                          className="w-full sm:w-auto bg-[#e95260] text-white px-5 py-2.5 rounded-lg font-semibold transition text-sm whitespace-nowrap"
                        >
                          View comment
                        </button>
                      )}
                      
                      {notification.type === 'review' && (
                        <button 
                          onClick={() => handleViewDetails(notification.id)}
                          className="w-full sm:w-auto bg-[#e95260] text-white px-5 py-2.5 rounded-lg font-semibold transition text-sm whitespace-nowrap"
                        >
                          View details
                        </button>
                      )}
                      
                      {notification.type === 'approved' && (
                        <button 
                          onClick={() => handleViewComment(notification.id)}
                          className="w-full sm:w-auto bg-[#e95260] text-white px-5 py-2.5 rounded-lg font-semibold transition text-sm whitespace-nowrap"
                        >
                          View comment
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
        <button className="flex flex-col items-center gap-1 text-white">
          <div className="w-10 h-10 bg-[#e95260] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <span className="text-xs font-medium">Notifications</span>
        </button>

        {/* Settings */}
        <button onClick={() => navigate('/Setting')} className="flex flex-col items-center gap-1 text-gray-400">
          <div className="w-10 h-10 flex items-center justify-center">
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