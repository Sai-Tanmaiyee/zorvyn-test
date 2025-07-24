// components/EmailCaptureModal.tsx

import React from "react";

interface EmailCaptureModalProps {
  visible: boolean;
  showSuccess: boolean;
  email: string;
  setEmail: (email: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({
  visible,
  showSuccess,
  email,
  setEmail,
  onClose,
  onSubmit,
}) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full p-8 rounded-xl shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg"
        >
          ✕
        </button>

        {showSuccess ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Zorvyn! 🎉
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              Your account has been created successfully.
            </p>
            <p className="text-blue-600 font-medium text-center">
              Opening your resume builder...
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to Build Your Perfect Resume?
            </h2>
            <p className="text-gray-600 mb-6">
              Join thousands of students who've created outstanding resumes with Zorvyn
            </p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={onSubmit}
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Start Building My Resume
            </button>

            <ul className="text-sm text-gray-600 mt-6 space-y-1">
              <li>✅ AI-powered resume building</li>
              <li>✅ Professional templates included</li>
              <li>✅ No credit card required</li>
              <li className="text-xs mt-2 text-gray-500">
                We respect your privacy. Your email will only be used for your Zorvyn account.
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailCaptureModal;
