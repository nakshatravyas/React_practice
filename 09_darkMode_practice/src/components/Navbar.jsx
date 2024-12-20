import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Navbar() {
    const {isDark,toggleTheme}=useContext(ThemeContext)
  return (
    <nav className="p-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Dark Mode Toggle</h1>
        <button
          onClick={toggleTheme} // Use the context's toggleTheme function
          className="py-2 px-4 rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 transition"
        >
            {isDark?"Light Mode":"Dark Mode"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
