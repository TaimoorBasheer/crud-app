import React from 'react';

const Popup = ({ isOpen,toggle}) => {
   

    
  return (
    <div
      className={` bg-black fixed top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]    w-[50%] h-[300px] flex items-center justify-center ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50" onClick={toggle}></div>
       <p className='text-white absolute top-[30px]'>Do you want to confirm this action</p>
        <button
          className=" top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] bg-white absolute p-2 px-4 text-red-500 hover:text-gray-700"
          onClick={toggle}
        >
          Close
        </button>
        <button
          className="mr-5 top-[50%] left-[40%] translate-x-[-50%]  translate-y-[-50%] bg-white absolute p-2 px-4 text-red-500 hover:text-gray-700"
          onClick={toggle}
        >
          Confirm
        </button>
      
    </div>
  );
};

export default Popup;
