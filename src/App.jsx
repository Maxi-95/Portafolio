import { useState } from 'react'
import Landing from "./Landing/Landing";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Landing></Landing>
    </>
  )
}

export default App
