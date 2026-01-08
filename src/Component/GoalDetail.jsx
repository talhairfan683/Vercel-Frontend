import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CancelConfirmation from './CancelConfirmation';
import logo from '../assets/logo.png';

export default function GoalDetail() {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const navigate = useNavigate();
  
  const goalData = {
    title: 'Goal Title',
    status: 'In Progress',
    progress: 60,
    deadline: '11/05/2024',
    description: 'Body text',
    commitmentFee: '20 € EUR',
    proofType: 'Image'
  };

  const handleCancelGoal = () => {
     setShowCancelModal(true);
    if (window('Are you sure you want to cancel this goal?')) {
      console.log('Goal cancelled');
      navigate('/dashboard');
    }
  };

  const handleUploadProof = () => {
    console.log('Upload proof clicked');
    // Navigate to upload proof page or open modal
  };

   const handleConfirmCancel = () => {
    console.log('Goal cancelled');
    navigate('/dashboard');
  };

     

  return (
    <div className="min-h-screen bg-[#16131d] flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-14 h-14 bg-[#e95260] rounded-full flex items-center justify-center transition shadow-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-white text-lg font-bold">svinpas</h1>
              <p className="text-gray-500 text-xs">success through motivational systems.</p>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#1a1625] rounded-3xl p-8 shadow-2xl border border-gray-800/50">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-white text-3xl font-bold mb-2">Goal Details</h2>
              <p className="text-gray-400 text-sm">Track your progress and manage your goal settings.</p>
            </div>
            <button 
              onClick={handleCancelGoal}
              className="bg-[#e95260] text-white px-6 py-2.5 rounded-lg font-semibold transition text-sm shadow-lg"
            >
               <CancelConfirmation 
                isOpen={showCancelModal}
                onClose={() => setShowCancelModal(false)}
                onConfirm={handleConfirmCancel}
      />
              Cancel Goal
            </button>
          </div>
          

          {/* Goal Info Card */}
          <div className="bg-[#221d2e] rounded-2xl p-6 mb-6 border border-gray-800/50">
            {/* Goal Title Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-white text-2xl font-bold">{goalData.title}</h3>
                  <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">
                    {goalData.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-teal-500/20 text-teal-400 px-4 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-sm font-bold">{goalData.progress}%</span>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-3">{goalData.description}</p>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Deadline: {goalData.deadline}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700/50 my-6"></div>

            {/* Commitment Fee */}
            <div className="flex items-center justify-between mb-5">
              <h4 className="text-white text-lg font-bold">Commitment Fee</h4>
              <span className="text-white text-xl font-bold">{goalData.commitmentFee}</span>
            </div>

            {/* Proof Type */}
            <div className="flex items-center justify-between">
              <h4 className="text-white text-lg font-bold">Proof Type</h4>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e95260]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-base font-semibold">{goalData.proofType}</span>
              </div>
            </div>
          </div>

          {/* Upload Proof Button */}
          <button 
            onClick={() => navigate('/submit-proof/1')}
            className="w-full bg-[#e95260] text-white font-bold py-4 rounded-xl transition shadow-lg text-lg"
          >
            Upload Proof
          </button>
        </div>
      </div>
    </div>
  );
}