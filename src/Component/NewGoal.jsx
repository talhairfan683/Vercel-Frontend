import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function NewGoal() {
  const navigate = useNavigate();
  const [goalType, setGoalType] = useState('individual');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    proofRequirement: '',
    proofDescription: '',
    date: '',
    time: '',
    commitmentFee: '25',
  });
  const [syncCalendar, setSyncCalendar] = useState(false);
  const [receiveReminders, setReceiveReminders] = useState(false);
  const [proofDropdown, setProofDropdown] = useState(false);
  const [feeDropdown, setFeeDropdown] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [realisticGoal, setRealisticGoal] = useState(false);

  const proofOptions = [
    'Photo Upload',
    'File Upload',
    'Video Upload',
    'Text/ Link Submission'
  ];

  const feeOptions = ['20€', '25€', '50€', '100€', '250€'];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!agreeTerms || !realisticGoal) {
      alert('Please accept all terms before submitting');
      return;
    }
    console.log('Goal submitted:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1d2e] to-[#16131d] flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-12 h-12 bg-[#e95260] rounded-full flex items-center justify-center transition"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
          {/* Title */}
          <h2 className="text-white text-xl font-bold mb-1">Create a New Goal</h2>
          <p className="text-gray-400 text-xs mb-6">What do you want to achieve?</p>

          {/* Select Goal Type */}
          <div className="mb-5">
            <label className="text-white text-sm font-semibold mb-3 block">Select Goal Type</label>
            <div className="flex gap-3">
              <button
                onClick={() => setGoalType('individual')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${
                  goalType === 'individual'
                    ? 'bg-[#e95260] from [#e95260] text-white'
                    : 'bg-[#2a2642] text-gray-400 hover:bg-[#332d4a]'
                }`}
              >
                Individual Goal
              </button>
              <button
                onClick={() => navigate('/milestone/1')}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${
                  goalType === 'milestone'
                    ? 'bg-[#e95260] from-[#e95260] to [#e95260] text-white'
                    : 'bg-[#2a2642] text-gray-400 hover:bg-[#332d4a]'
                }`}
              >
                Milestone Goal
              </button>
            </div>
          </div>

          {/* Goal Title */}
          <div className="mb-5">
            <label className="text-white text-sm font-semibold mb-2 block">Goal Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Medical Assistant"
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400 text-sm"
            />
          </div>

          {/* Goal Description */}
          <div className="mb-5">
            <label className="text-white text-sm font-semibold mb-2 block">Goal Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Explain as precisely as possible what kind of goal you want to achieve and how. The more specific you are, the easier it is to set goals"
              rows="3"
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400 text-sm resize-none"
            />
          </div>

          {/* Proof Requirement Dropdown */}
          <div className="mb-5">
            <label className="text-white text-sm font-semibold mb-2 block">Proof Requirement</label>
            <div className="relative">
              <button
                onClick={() => setProofDropdown(!proofDropdown)}
                className="w-full bg-white text-left px-4 py-3 rounded-lg flex items-center justify-between"
              >
                <span className={formData.proofRequirement ? 'text-gray-900' : 'text-[#e95260]'}>
                  {formData.proofRequirement || 'Select'}
                </span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${proofDropdown ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {proofDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-20">
                  {proofOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setFormData({ ...formData, proofRequirement: option });
                        setProofDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-100 transition text-sm"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Proof Description */}
          <div className="mb-5">
            <label className="text-white text-sm font-semibold mb-2 block">Proof Description</label>
            <textarea
              name="proofDescription"
              value={formData.proofDescription}
              onChange={handleInputChange}
              placeholder="Explain as precisely as possible what kind of proof of goal and how the. What will be on the the requirement?"
              rows="3"
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400 text-sm resize-none"
            />
          </div>

          {/* Deadline Section */}
          <div className="mb-5">
            <h3 className="text-white text-base font-bold mb-3">Deadline</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {/* Date */}
              <div>
                <label className="text-white text-xs font-medium mb-2 block">Date</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="4/4/18"
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-sm"
                />
              </div>

              {/* Time */}
              <div>
                <label className="text-white text-xs font-medium mb-2 block">Time</label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  placeholder="11:45 pm"
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-sm"
                />
              </div>
            </div>
          </div>

          {/* Commitment Fee */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-white text-sm font-semibold">Commitment Fee</label>
              <div className="relative">
                <button
                  onClick={() => setFeeDropdown(!feeDropdown)}
                  className="bg-white px-4 py-2 rounded-lg flex items-center gap-2 min-w-[80px]"
                >
                  <span className="text-gray-900 text-sm font-medium">{formData.commitmentFee}€</span>
                  <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform ${feeDropdown ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {feeDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-20 min-w-[100px]">
                    {feeOptions.map((fee) => (
                      <button
                        key={fee}
                        onClick={() => {
                          setFormData({ ...formData, commitmentFee: fee.replace('€', '') });
                          setFeeDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-gray-900 hover:bg-gray-100 transition text-sm"
                      >
                        {fee}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Toggle Switches */}
          <div className="mb-5 space-y-3">
            {/* Sync with calendar */}
            <div className="flex items-center justify-between">
              <span className="text-white text-sm">Sync with my calendar</span>
              <button
                onClick={() => setSyncCalendar(!syncCalendar)}
                className={`relative w-11 h-6 rounded-full transition ${
                  syncCalendar ? 'bg-[#e95260]' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    syncCalendar ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Receive reminders */}
            <div className="flex items-center justify-between">
              <span className="text-white text-sm">Receive reminders before the deadline</span>
              <button
                onClick={() => setReceiveReminders(!receiveReminders)}
                className={`relative w-11 h-6 rounded-full transition ${
                  receiveReminders ? 'bg-[#e95260]' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    receiveReminders ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mb-6 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-gray-600 text-[#e95260] focus:ring-white bg-transparent"
              />
              <span className="text-gray-400 text-xs leading-tight">
                The goal is achievable through my own effort and does not rely on luck or third parties/actions beyond my control.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={realisticGoal}
                onChange={(e) => setRealisticGoal(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-gray-600 text-pink-500 focus:ring-pink-500 bg-transparent"
              />
              <span className="text-gray-400 text-xs leading-tight">
                My goal is realistic and measurable.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!agreeTerms || !realisticGoal}
            className={`w-full py-3.5 rounded-lg font-semibold text-white transition ${
              agreeTerms && realisticGoal
                ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700'
                : 'bg-gray-600 cursor-not-allowed opacity-50'
            }`}
          >
            Submit Goal (20€)
          </button>
        </div>
      </div>
    </div>
  );
}