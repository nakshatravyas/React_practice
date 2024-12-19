import { useState } from "react"
import { ThemeProvider } from "./context/Theme"
import { useEffect } from "react"
import Card from "./components/Card"
import ThemeButton from "./components/ThemeButton"


function App() {
  const [themeMode,setThememode]=useState("light")
  const lightTheme=()=>{
    setThememode("light")
  }
  const darkTheme=()=>{
    setThememode("dark")
  }
  //actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* themeBtn */}
          <ThemeButton/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* card */}
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
