import React from 'react';

const Popup = ({ isOpen, toggle, confirmAction, cancelAction }) => {
  const handleConfirm = () => {
    confirmAction();
    toggle();
  };

  return (
    
    <div
        className={`bg-white ease-linear duration-1000 shadow-lg fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[300px] flex items-center justify-center flex-col ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <div className=" top-0 left-0 w-full h-full bg-white opacity-100 " onClick={toggle}></div>
        <p className="text-red-600 absolute top-[30px]">Do you want to confirm this action</p>
        <div className='flex justify-center align-middle relative bottom-10'>
        <button
          className="mr-5    bg-black  p-2 px-4 text-white hover:text-gray-700"
          onClick={() => {
            cancelAction();
            toggle();
          }}
        >
          Close
        </button>
        <button
          className="mr-5 top-[50%]  bg-red-500  p-2 px-4 text-white hover:text-gray-700"
          onClick={handleConfirm}
        >
          Confirm
        </button>
        </div>
      </div>
  );
};

export default Popup;