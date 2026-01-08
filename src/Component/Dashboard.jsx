import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import RejectionModal from './RejectionModal';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showMilestones, setShowMilestones] = useState(true);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  
  const rejectionData = {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
    reason: 'Lorem ipsum dolor sit amet consectetur. Facilisis facilisi nisi consectetur mattis ultricies mauris sed. Malesuada vestibulum dictum lorem viverra. Et urna sit feugiat mus nunc. Aliquet amet eu sagittis tempus euismod. Non sed urna quis aliquet dignissim.'
  };

  return (
    <div className="flex min-h-screen bg-[#1a1625]">
      {/* Sidebar */}
      <aside className="w-32 bg-[#16131d] border-r border-gray-800/50 flex flex-col items-center py-6 gap-8">
        {/* Logo */}
        <div className="mb-4">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        {/* My Goals */}
        <button className="flex flex-col items-center gap-2 text-white">
          <div className="w-10 h-10 bg-[#e95260] rounded-xl flex items-center justify-center">
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
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-white text-3xl font-bold flex items-center gap-2 mb-2">
              Welcome! 🎉
            </h1>
            <p className="text-gray-400 text-sm">Stay on track with your goals today.</p>
          </div>

          {/* My Goals Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-2xl font-bold">My Goals</h2>
            <button 
              onClick={() => navigate('/new-goal')}
              className="px-6 py-2 bg-[#e95260] text-white rounded-lg font-medium transition flex items-center gap-2"
            >
              <span className="text-xl">+</span>
              Create New Goal
            </button>
          </div>

          {/* Tabs and Status Filter */}
          <div className="flex items-center justify-between mb-6">
            {/* Tabs */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === 'all'
                    ? 'bg-[#e95260] from-[#e95260] text-white'
                    : 'bg-[#2a2438] text-gray-400 hover:bg-[#352d47]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('individual')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === 'individual'
                    ? 'bg-[#e95260] from-[#e95260] text-white'
                    : 'bg-[#2a2438] text-gray-400 hover:bg-[#352d47]'
                }`}
              >
                Individual Goal
              </button>
              <button
                 onClick={() => navigate('/milestone/1')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === 'milestone'
                    ? 'bg-[#e95260] from-[#e95260] text-white'
                    : 'bg-[#2a2438] text-gray-400 hover:bg-[#352d47]'
                }`}
              >
                Milestone Goal
              </button>
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                className="px-4 py-2 bg-[#2a2438] text-white rounded-lg flex items-center gap-2 hover:bg-[#352d47] transition"
              >
                <span className="text-sm font-medium">Status</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${showStatusDropdown ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showStatusDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#2a2438] rounded-lg shadow-xl border border-gray-700 overflow-hidden z-10">
                  <button className="w-full text-left px-4 py-2.5 text-white text-sm hover:bg-[#352d47] transition">
                    In Progress
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-white text-sm hover:bg-[#352d47] transition">
                    Completed
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-white text-sm hover:bg-[#352d47] transition">
                    Pending Approval
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-white text-sm hover:bg-[#352d47] transition">
                    Missed
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-white text-sm hover:bg-[#352d47] transition">
                    Cancelled
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Individual Goal Section */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-bold mb-4">Individual Goal</h3>

            {/* Goal Card 1 */}
            <div className="bg-[#252031] rounded-2xl p-5 mb-4 border border-gray-800/50">
              <h4 className="text-white font-semibold text-base mb-2">Jog 3 km on October 18th</h4>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>October 18th, 2024, 6:00pm</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Body text</p>
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-[#e95260] text-white rounded-lg text-sm font-medium transition">
                  Submit Proof
                </button>
                <button onClick={() => navigate('/goal-detail/1')} className="px-5 py-2 bg-[#2a2438] hover:bg-[#352d47] text-white rounded-lg text-sm font-medium transition flex items-center gap-1">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Goal Card 2 - With Progress */}
            <div className="bg-[#252031] rounded-2xl p-5 border border-gray-800/50">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-white font-semibold text-base">Jog 3 km on October 18th</h4>
                <div className="flex items-center gap-2 bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-xs font-medium">60%</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>October 18th, 2024, 6:00pm</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Body text</p>
              <button 
                onClick={() => setShowRejectionModal(true)}
                className="px-5 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm font-medium border border-red-500/30 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                Rejected
              </button>
            </div>
          </div>

          {/* Milestone Goal Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Milestone Goal</h3>

            {/* Milestone Card */}
            <div className="bg-[#252031] rounded-2xl p-5 border border-gray-800/50">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-white font-semibold text-base">Jog 3 km on October 18th</h4>
                <div className="flex items-center gap-2 bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-xs font-medium">60%</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>October 18th, 2024, 6:00pm</span>
              </div>

              {/* Milestones Dropdown */}
              <button 
                onClick={() => setShowMilestones(!showMilestones)}
                className="w-full flex items-center justify-between text-white text-sm font-medium mb-4 py-2"
              >
                <span>Milestones</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${showMilestones ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showMilestones && (
                <div className="space-y-3 mb-4">
                  {/* Milestone 1 */}
                  <div className="bg-[#1f1b29] rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-white text-sm font-medium">Jog 3 km on October 18th</h5>
                      <div className="flex items-center gap-2 bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-xs font-medium">60%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>October 18th, 2024, 6:00pm</span>
                    </div>
                    <button className="px-4 py-2 bg-[#e95260] text-white rounded-lg text-xs font-medium transition">
                      Submit Proof
                    </button>
                  </div>

                  {/* Milestone 2 */}
                  <div className="bg-[#1f1b29] rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-white text-sm font-medium">Eat a low-calorie lunch</h5>
                      <span className="px-3 py-1 bg-gray-600/30 text-gray-400 rounded-full text-xs">
                        Not Started
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>October 18th, 2024, 6:00pm</span>
                    </div>
                  </div>
                </div>
              )}

              <button className="text-gray-400 hover:text-white text-sm font-medium flex items-center gap-1 transition">
                View Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Rejection Modal */}
      <RejectionModal 
        isOpen={showRejectionModal}
        onClose={() => setShowRejectionModal(false)}
        rejectionData={rejectionData}
      />
    </div>
  );
}