import React from 'react';
import {FaSearch} from "react-icons/fa";

const Navbar = () => {

  return (
    <nav
      className="shadow-md flex flex-col md:flex-row justify-between
    items-center px-3 py-4 rounded-b-2xl fixed top-0 right-0 left-0 backdrop-blur-md z-50"
    >
      <h1 className="text-xl font-bold mb-2 md:mb-0 text-white">Blogging</h1>
      <div className="flex justify-center items-center gap-2 ">
        <FaSearch className="text-lg text-white" />
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Blog Here...."
          className='outline-none border-b-2 border-gray-400 text-white
          focus:border-white bg-transparent transition-all px-2 py-1 md:w-[20vw]'
        />
      </div>
    </nav>
  );
}

export default Navbar