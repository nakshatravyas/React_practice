import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import ThemeContextProvider from "./context/ThemeContextProvider"

function App() {

  return (
    <ThemeContextProvider>
      <Navbar/>
      <Profile/>
    </ThemeContextProvider>
  )
}

export default App
