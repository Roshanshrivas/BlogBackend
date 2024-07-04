import React from 'react'

const AdminNavbar = () => {
  return (
    <nav className="bg-purple-500 p-4 mx-auto flex justify-between items-center
    shadow-md">
        <a href="/" className="text-white text-2xl font-bold">Coder</a>
        <ul className="flex space-x-4 text-white">
            <li className={`hover:font-bold transition-all duration-300 ease-in-out cursor-pointer hover:text-red-200`}>All Blogs</li>
            <li className={`hover:font-bold transition-all duration-300 ease-in-out cursor-pointer hover:text-red-200`}>Create Blog</li>
            <li className={`hover:font-bold transition-all duration-300 ease-in-out cursor-pointer hover:text-red-200`}>Logout</li>
        </ul>
    </nav>
  )
}

export default AdminNavbar