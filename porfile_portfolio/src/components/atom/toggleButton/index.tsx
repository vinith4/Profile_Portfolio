import React, { useState } from "react";
import Modal from "react-modal";

const ToggleButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className=" flex justify-end">
      <button
        type="button"
        className="items-center p-2 w-10 h-10 top-0 right-0 justify-center text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
        onClick={handleToggle}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="Modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg p-6 shadow-lg"
        overlayClassName="Overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center"
      >
        {/* Your modal content goes here */}
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {/* ... (the rest of your menu items) ... */}
        </ul>
      </Modal>
    </div>
  );
};

export default ToggleButton;
