import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Profile() {
    const{isDark}=useContext(ThemeContext)
  return (
    <div>
    <h1 className='text-3xl w-full max-w-max bg-blue-700 rounded-lg p-4 dark:text-white dark:bg-slate-700'>
        {isDark?"Dark Mode":"Light Mode"}
    </h1>
    </div>
  )
}

export default Profile
