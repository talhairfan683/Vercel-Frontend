import { useNavigate } from 'react-router-dom';

export default function CancelConfirmation({ isOpen, onClose, onConfirm, title = "Are you sure?", message = "There will be No refund of the processing fee or milestone fees already paid." }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleYes = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  const handleNo = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-[#1e1b2e] rounded-3xl w-full max-w-md border border-gray-700/50 shadow-2xl relative">
          {/* Close Icon Circle */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <button
              onClick={onClose}
              className="w-16 h-16 bg-[#e95260] rounded-full flex items-center justify-center transition shadow-lg"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="pt-12 px-8 pb-8">
            {/* Title */}
            <h2 className="text-white text-3xl font-bold text-center mb-6">
              {title}
            </h2>

            {/* Message */}
            <p className="text-gray-400 text-sm text-center mb-8 leading-relaxed">
              {message}
            </p>

            {/* Buttons */}
            <div className="space-y-4">
              {/* Yes Button */}
              <button
                onClick={handleYes}
                className="w-full bg-gradient-to-r from-rose-500 to-[#e95260] hover:from-rose-600 hover:to-[#e95260] text-white font-bold py-4 rounded-xl transition shadow-lg text-base"
              >
                Yes
              </button>

              {/* No Button */}
              <button
                onClick={handleNo}
                className="w-full bg-[#2a2438] hover:bg-[#332d47] text-white font-semibold py-4 rounded-xl transition text-base"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}