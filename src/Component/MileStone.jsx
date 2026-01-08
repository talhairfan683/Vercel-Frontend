import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Milestone() {
  const navigate = useNavigate();
  
  const milestones = [
    {
      id: 1,
      title: 'Sub-goal 1',
      date: 'October 18th, 2024, 6:00pm',
      submitBy: 'Submit proof by October 19th, 6:00 AM',
      progress: 60,
      status: 'In Progress',
      statusColor: 'bg-yellow-500/20 text-yellow-400'
    },
    {
      id: 2,
      title: 'Sub-goal 2',
      date: 'October 18th, 2024, 6:00pm',
      submitBy: 'Submit proof by October 19th, 6:00 AM',
      progress: 20,
      status: 'Pending',
      statusColor: 'bg-gray-500/20 text-gray-400'
    },
    {
      id: 3,
      title: 'Sub-goal 2',
      date: 'October 18th, 2024, 6:00pm',
      submitBy: 'Submit proof by October 19th, 6:00 AM',
      progress: 25,
      status: 'Pending',
      statusColor: 'bg-gray-500/20 text-gray-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1d2e] to-[#16131d] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-12 h-12 bg-[#e95260] rounded-full flex items-center justify-center transition"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="text-white text-base font-bold">svinpas</h1>
              <p className="text-gray-500 text-xs">success through motivational systems.</p>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#1e1b2e] rounded-2xl p-6 shadow-2xl border border-gray-800/50">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-white text-2xl font-bold mb-1">Goal Details</h2>
              <p className="text-gray-400 text-sm">Track your progress and manage your goal settings.</p>
            </div>
            <button className="bg-[#e95260] text-white px-5 py-2 rounded-lg font-semibold transition text-sm">
              Cancel Goal
            </button>
          </div>

          {/* Goal Title Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <h3 className="text-white text-xl font-bold">Goal Title</h3>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                  In Progress
                </span>
              </div>
              <div className="flex items-center gap-2 text-teal-400">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-sm font-medium">60%</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-2">Body text</p>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Deadline: 11/05/2024</span>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="mb-6">
            <h3 className="text-white text-lg font-bold mb-4">Milestones</h3>
            
            <div className="space-y-4">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="bg-[#252031] rounded-xl p-4 border border-gray-800/50">
                  {/* Milestone Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-white text-base font-semibold mb-2">{milestone.title}</h4>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{milestone.date}</span>
                        </div>
                        <div className="text-gray-500 text-xs">{milestone.submitBy}</div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${milestone.statusColor} whitespace-nowrap`}>
                      {milestone.status}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1 bg-gray-700 rounded-full h-2 mr-3">
                        <div 
                          className="bg-gradient-to-r from-teal-400 to-teal-500 h-2 rounded-full transition-all"
                          style={{ width: `${milestone.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-400 text-xs font-medium">{milestone.progress}%</span>
                    </div>
                  </div>

                  {/* Upload Button */}
                  <button className="bg-[#e95260] text-white px-5 py-2 rounded-lg font-medium transition text-sm">
                    Upload Proof
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Fee */}
          <div className="flex items-center justify-between py-4 border-t border-gray-800/50 mb-4">
            <span className="text-white text-base font-semibold">Commitment Fee</span>
            <span className="text-white text-xl font-bold">25€</span>
          </div>

          {/* Proof Type */}
          <div className="flex items-center justify-between py-4 border-t border-gray-800/50 mb-6">
            <span className="text-white text-base font-semibold">Proof Type</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#e95260]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-medium">Image</span>
            </div>
          </div>

          {/* Upload Proof Button */}
          <button className="w-full bg-[#e95260] text-white font-semibold py-4 rounded-lg transition">
            Upload Proof (Entire Goal)
          </button>
        </div>
      </div>
    </div>
  );
}