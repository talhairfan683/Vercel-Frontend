import { useNavigate } from 'react-router-dom';

export default function RejectionModal({ isOpen, onClose, rejectionData }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  // Default rejection data if none provided
  const data = rejectionData || {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
    reason: 'Lorem ipsum dolor sit amet consectetur. Facilisis facilisi nisi consectetur mattis ultricies mauris sed. Malesuada vestibulum dictum lorem viverra. Et urna sit feugiat mus nunc. Aliquet amet eu sagittis tempus euismod. Non sed urna quis aliquet dignissim.'
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-[#1f1b29] rounded-2xl w-full max-w-lg border border-gray-700/50 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700/50">
            <h3 className="text-white text-xl font-bold">Reason for Rejection</h3>
            <button 
              onClick={onClose}
              className="text-white hover:text-[#e95260] transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Image */}
            <div className="mb-5">
              <img 
                src={data.image} 
                alt="Rejection context" 
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>

            {/* Reason Text */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {data.reason}
            </p>
          </div>

          {/* Footer - Optional action buttons */}
          <div className="px-6 pb-6">
            <button 
              onClick={onClose}
              className="w-full bg-[#e95260] text-white font-semibold py-3 rounded-lg transition"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </>
  );
}