import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function SubmitProof() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [note, setNote] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log('File selected:', file.name);
    }
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  const handleUploadProof = () => {
    if (!selectedFile) {
      alert('Please upload a file first');
      return;
    }
    console.log('Uploading proof:', { file: selectedFile, note });
    alert('Proof submitted successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0f0d15] flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="w-14 h-14 bg-[#e95260] rounded-full flex items-center justify-center transition shadow-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-white text-3xl font-bold mb-2">Submit Proof for [Goal Title]</h2>
            <p className="text-gray-400 text-sm">Upload your proof here.</p>
          </div>

          {/* Upload Area */}
          <div className="mb-6">
            <button
              onClick={handleFileClick}
              className="w-full border-2 border-dashed border-gray-700 hover:border-gray-600 rounded-2xl p-12 transition bg-[#1a1625] hover:bg-[#211d2e] cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-[#e95260] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-white text-base font-semibold mb-1">
                  {selectedFile ? selectedFile.name : 'Photo/Video/Document'}
                </p>
                {!selectedFile && (
                  <p className="text-gray-500 text-sm">Click to upload</p>
                )}
              </div>
            </button>
            
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              accept="image/*,video/*,.pdf,.doc,.docx"
              className="hidden"
            />
          </div>

          {/* Leave Note */}
          <div className="mb-8">
            <label className="text-white text-base font-semibold mb-3 block">Leave Note</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              rows="4"
              className="w-full bg-white text-gray-900 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400 text-sm resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleCancel}
              className="bg-[#2a2438] hover:bg-[#332d47] text-white font-semibold py-4 rounded-xl transition text-base"
            >
              Cancel
            </button>
            <button
              onClick={handleUploadProof}
              className="bg-[#e95260] text-white font-bold py-4 rounded-xl transition shadow-lg text-base"
            >
              Upload Proof
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}