import React from "react";

const Modal = ({ isOpen, onClose, prediction, confidence, url }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">
          Tanaman Tomat Anda Mengidap Penyakit,,,
        </h2>
        <p className="mb-4">Modal content goes here...</p>
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
