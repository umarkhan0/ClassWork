import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './data'

function App() {
  const handleDataUpdate = (data) => {
    console.log('Data received in App:', data);
    // You can do whatever you want with the data here
  };
  const [count, setCount] = useState(0)

  return (
    <>
    <Data onDataUpdate={handleDataUpdate} />
    </>
  )
}

export default App
